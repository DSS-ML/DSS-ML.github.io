import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SpaceShuttle from './SpaceShuttle';
import Stars from './Stars';
import Constellations from './Constellations';
import { courses } from '../data/courses';

const GameMap = () => {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [shuttlePos, setShuttlePos] = useState({ x: 50, y: 50 });
    const [shuttleRotation, setShuttleRotation] = useState(0);
    const [isFlying, setIsFlying] = useState(false);

    // All topics with positions
    const allTopics = [
        ...courses.unsupervised.topics.map(t => ({ ...t, course: 'unsupervised' })),
        ...courses.deepLearning.topics.map(t => ({ ...t, course: 'deep-learning' }))
    ];

    // Planet positions (as percentages) - Two constellations
    const destinations = {
        // Left constellation - Unsupervised Learning
        'clustering': { x: 25, y: 20, angle: -30 },
        'dimensionality-reduction': { x: 15, y: 45, angle: -60 },
        'recommender-systems': { x: 25, y: 72, angle: -120 },

        // Right constellation - Deep Learning  
        'networks': { x: 75, y: 15, angle: 30 },
        'howto': { x: 82, y: 35, angle: 15 },
        'gnn': { x: 82, y: 58, angle: -15 },
        'transformers': { x: 75, y: 82, angle: -30 }
    };

    // Center position
    const centerPos = { x: 50, y: 50 };

    // Fly shuttle to destination then navigate
    const flyToDestination = (topicId, index) => {
        const dest = destinations[topicId];
        if (!dest || isFlying) return;

        setIsFlying(true);
        setSelectedIndex(index);

        // Calculate angle to destination
        const angle = Math.atan2(dest.y - shuttlePos.y, dest.x - shuttlePos.x) * (180 / Math.PI);
        setShuttleRotation(angle);

        // Animate to destination
        setTimeout(() => {
            setShuttlePos({ x: dest.x, y: dest.y });
        }, 100);

        // Navigate after animation completes
        setTimeout(() => {
            navigate(`/topic/${topicId}`);
            setTimeout(() => {
                setShuttlePos(centerPos);
                setShuttleRotation(0);
                setIsFlying(false);
                setSelectedIndex(-1);
            }, 100);
        }, 900);
    };

    // Keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (isFlying) return;

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
                setSelectedIndex(prev => prev <= 0 ? topicCount - 1 : prev - 1);
                break;
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % topicCount);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && selectedIndex < topicCount) {
                    flyToDestination(allTopics[selectedIndex].id, selectedIndex);
                }
                break;
            default:
                break;
        }
    }, [allTopics, selectedIndex, isFlying]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const handlePlanetClick = (topicId, index) => {
        flyToDestination(topicId, index);
    };

    return (
        <div className="game-container" tabIndex={0}>
            {/* Deep space star background */}
            <Stars count={200} />

            {/* Header */}
            <header className="game-header">
                <div className="logo">
                    <div className="logo-icon">🚀</div>
                    <div className="logo-text">
                        <h1>DSS-ML</h1>
                        <p>Data Science Journey</p>
                    </div>
                </div>
                <div className="nav-info">
                    <div className="nav-stat">
                        <div className="nav-stat-value">7</div>
                        <div className="nav-stat-label">Planets</div>
                    </div>
                    <div className="nav-stat">
                        <div className="nav-stat-value">2025</div>
                        <div className="nav-stat-label">Mission</div>
                    </div>
                </div>
            </header>

            {/* Constellation labels at top */}
            <div className="constellation-label unsupervised">
                ✨ Unsupervised Learning
            </div>
            <div className="constellation-label deep-learning">
                ✨ Deep Learning
            </div>

            {/* Constellation lines */}
            <div className="constellations-container">
                <Constellations />
            </div>

            {/* Space shuttle in center - flies to planets */}
            <div
                className={`shuttle-wrapper ${isFlying ? 'flying' : ''}`}
                style={{
                    left: `${shuttlePos.x}%`,
                    top: `${shuttlePos.y}%`,
                }}
            >
                <SpaceShuttle rotation={shuttleRotation} />
            </div>

            {/* Planet destinations */}
            {allTopics.map((topic, index) => {
                const dest = destinations[topic.id];
                if (!dest) return null;

                return (
                    <div
                        key={topic.id}
                        className={`planet ${topic.course} ${selectedIndex === index ? 'selected' : ''}`}
                        style={{ left: `${dest.x}%`, top: `${dest.y}%` }}
                        onClick={() => handlePlanetClick(topic.id, index)}
                    >
                        <div className="planet-body">
                            <div className="planet-glow"></div>
                            <span className="planet-icon">{topic.icon}</span>
                        </div>
                        <div className="planet-label">{topic.name}</div>
                    </div>
                );
            })}

            {/* Footer hint */}
            <div className="footer-hint">
                <span>🚀 Use arrow keys + Enter, or click any planet to explore</span>
            </div>
        </div>
    );
};

export default GameMap;
