import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MillenniumFalcon from './MillenniumFalcon';
import Stars from './Stars';
import { courses } from '../data/courses';

const GameMap = () => {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [shuttlePos, setShuttlePos] = useState({ x: 50, y: 50 });
    const [shuttleRotation, setShuttleRotation] = useState(0);
    const [isFlying, setIsFlying] = useState(false);

    // All topics - only Unsupervised Learning for 2026
    const allTopics = [
        ...courses.unsupervised.topics.map(t => ({ ...t, course: 'unsupervised' }))
    ];

    // Planet positions (as percentages) - 6 Unsupervised planets in 2x3 grid, centered
    const destinations = {
        'introduction': { x: 38, y: 25, angle: -30 },
        'topic-2': { x: 62, y: 25, angle: 30 },
        'topic-3': { x: 38, y: 50, angle: -15 },
        'topic-4': { x: 62, y: 50, angle: 15 },
        'topic-5': { x: 38, y: 75, angle: -45 },
        'topic-6': { x: 62, y: 75, angle: 45 }
    };

    // Center position
    const centerPos = { x: 50, y: 50 };

    // Fly shuttle to destination then navigate
    const flyToDestination = (topicId, index, isLocked) => {
        if (isLocked || isFlying) return;

        const dest = destinations[topicId];
        if (!dest) return;

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
            case 'ArrowRight':
                e.preventDefault();
                setSelectedIndex(prev => {
                    if (prev < 0) return 0;
                    // Toggle between left and right columns
                    const row = Math.floor(prev / 2);
                    const col = prev % 2;
                    return row * 2 + (1 - col);
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
                    const topic = allTopics[selectedIndex];
                    if (!topic.locked) {
                        flyToDestination(topic.id, selectedIndex, topic.locked);
                    }
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

    const handlePlanetClick = (topicId, index, isLocked) => {
        flyToDestination(topicId, index, isLocked);
    };

    // Count unlocked planets
    const unlockedCount = allTopics.filter(t => !t.locked).length;
    const totalCount = allTopics.length;

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
                        <div className="nav-stat-value">{unlockedCount}/{totalCount}</div>
                        <div className="nav-stat-label">Planets</div>
                    </div>
                    <div className="nav-stat">
                        <div className="nav-stat-value">2026</div>
                        <div className="nav-stat-label">Mission</div>
                    </div>
                </div>
            </header>

            {/* Constellation label centered */}
            <div className="constellation-label unsupervised" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                ✨ Unsupervised Learning
            </div>

            {/* Millennium Falcon in center - flies to planets */}
            <div
                className={`shuttle-wrapper ${isFlying ? 'flying' : ''}`}
                style={{
                    left: `${shuttlePos.x}%`,
                    top: `${shuttlePos.y}%`,
                }}
            >
                <MillenniumFalcon rotation={shuttleRotation} />
            </div>

            {/* Planet destinations */}
            {allTopics.map((topic, index) => {
                const dest = destinations[topic.id];
                if (!dest) return null;

                return (
                    <div
                        key={topic.id}
                        className={`planet ${topic.course} ${selectedIndex === index ? 'selected' : ''} ${topic.locked ? 'locked' : ''}`}
                        style={{ left: `${dest.x}%`, top: `${dest.y}%` }}
                        onClick={() => handlePlanetClick(topic.id, index, topic.locked)}
                    >
                        <div className="planet-body">
                            <div className="planet-glow"></div>
                            <span className="planet-icon">{topic.locked ? '🔒' : topic.icon}</span>
                        </div>
                        <div className="planet-label">{topic.name}</div>

                        {/* Baby Yoda greeting on unlocked planets */}
                        {!topic.locked && (
                            <div className="alien-container">
                                <img src="/babyyoda.png" alt="Baby Yoda" className="baby-yoda" />
                                <div className="alien-speech">Hi!</div>
                            </div>
                        )}
                    </div>
                );
            })}

            {/* Footer hint */}
            <div className="footer-hint">
                <span>🛸 Use arrow keys + Enter, or click any planet to explore</span>
            </div>
        </div>
    );
};

export default GameMap;
