import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Motorcycle from './Motorcycle';
import Stars from './Stars';
import RoadSVG from './RoadSVG';
import { courses } from '../data/courses';

const GameMap = () => {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [motorcyclePos, setMotorcyclePos] = useState({ x: 50, y: 50 }); // percentage
    const [motorcycleRotation, setMotorcycleRotation] = useState(0);
    const [isMoving, setIsMoving] = useState(false);

    // All topics with positions
    const allTopics = [
        ...courses.unsupervised.topics.map(t => ({ ...t, course: 'unsupervised' })),
        ...courses.deepLearning.topics.map(t => ({ ...t, course: 'deep-learning' }))
    ];

    // Destination positions (as percentages)
    const destinations = {
        'clustering': { x: 26, y: 22, angle: -45 },
        'dimensionality-reduction': { x: 15, y: 50, angle: -90 },
        'recommender-systems': { x: 26, y: 78, angle: 135 },
        'networks': { x: 74, y: 18, angle: 45 },
        'howto': { x: 81, y: 38, angle: 30 },
        'gnn': { x: 81, y: 62, angle: -30 },
        'transformers': { x: 74, y: 82, angle: -135 }
    };

    // Center position
    const centerPos = { x: 50, y: 50 };

    // Animate motorcycle to destination then navigate
    const driveToDestination = (topicId, index) => {
        const dest = destinations[topicId];
        if (!dest || isMoving) return;

        setIsMoving(true);
        setSelectedIndex(index);

        // Calculate angle to destination
        const angle = Math.atan2(dest.y - centerPos.y, dest.x - centerPos.x) * (180 / Math.PI) + 90;
        setMotorcycleRotation(angle);

        // Animate to destination
        setTimeout(() => {
            setMotorcyclePos({ x: dest.x, y: dest.y });
        }, 100);

        // Navigate after animation completes
        setTimeout(() => {
            navigate(`/topic/${topicId}`);
            // Reset position for when user comes back
            setTimeout(() => {
                setMotorcyclePos(centerPos);
                setMotorcycleRotation(0);
                setIsMoving(false);
                setSelectedIndex(-1);
            }, 100);
        }, 800);
    };

    // Keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (isMoving) return;

        const topicCount = allTopics.length;

        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                setSelectedIndex(prev => {
                    const newIndex = prev <= 2 && prev >= 0 ? (prev + 1) % 3 : 0;
                    return newIndex;
                });
                break;
            case 'ArrowRight':
                e.preventDefault();
                setSelectedIndex(prev => {
                    const newIndex = prev >= 3 ? ((prev - 3 + 1) % 4) + 3 : 3;
                    return newIndex;
                });
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => {
                    const newIndex = prev <= 0 ? topicCount - 1 : prev - 1;
                    return newIndex;
                });
                break;
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => {
                    const newIndex = (prev + 1) % topicCount;
                    return newIndex;
                });
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && selectedIndex < topicCount) {
                    driveToDestination(allTopics[selectedIndex].id, selectedIndex);
                }
                break;
            default:
                break;
        }
    }, [allTopics, selectedIndex, isMoving]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const handleDestinationClick = (topicId, index) => {
        driveToDestination(topicId, index);
    };

    return (
        <div className="game-container" tabIndex={0}>
            {/* Animated star background */}
            <Stars count={150} />

            {/* Header */}
            <header className="game-header">
                <div className="logo">
                    <div className="logo-icon">🏍️</div>
                    <div className="logo-text">
                        <h1>DSS-ML</h1>
                        <p>Data Science Journey</p>
                    </div>
                </div>
                <div className="nav-info">
                    <div className="nav-stat">
                        <div className="nav-stat-value">7</div>
                        <div className="nav-stat-label">Destinations</div>
                    </div>
                    <div className="nav-stat">
                        <div className="nav-stat-value">2025</div>
                        <div className="nav-stat-label">Edition</div>
                    </div>
                </div>
            </header>

            {/* Course path labels - TOP POSITION, SMALLER */}
            <div className="path-label-top unsupervised">
                🔍 Unsupervised Learning
            </div>
            <div className="path-label-top deep-learning">
                🧠 Deep Learning
            </div>

            {/* Road visualization */}
            <div className="road-container">
                <RoadSVG />
            </div>

            {/* Animated motorcycle - moves along path */}
            <div
                className={`motorcycle-wrapper ${isMoving ? 'moving' : ''}`}
                style={{
                    left: `${motorcyclePos.x}%`,
                    top: `${motorcyclePos.y}%`,
                }}
            >
                <Motorcycle rotation={motorcycleRotation} />
            </div>

            {/* Destination markers */}
            {allTopics.map((topic, index) => {
                const dest = destinations[topic.id];
                if (!dest) return null;

                return (
                    <div
                        key={topic.id}
                        className={`destination ${selectedIndex === index ? 'selected' : ''}`}
                        style={{ left: `${dest.x}%`, top: `${dest.y}%` }}
                        onClick={() => handleDestinationClick(topic.id, index)}
                    >
                        <div className={`destination-marker ${topic.course}`}>
                            {topic.icon}
                        </div>
                        <div className="destination-label">{topic.name}</div>
                    </div>
                );
            })}

            {/* Footer hint */}
            <div className="footer-hint">
                <span>🎮 Use arrow keys + Enter, or click any destination</span>
            </div>
        </div>
    );
};

export default GameMap;
