import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stars from './Stars';
import MillenniumFalcon from './MillenniumFalcon';

const GalaxySelection = () => {
    const navigate = useNavigate();
    const [selectedGalaxy, setSelectedGalaxy] = useState(null);
    const [isFlying, setIsFlying] = useState(false);

    const galaxies = [
        {
            id: 'unsupervised-2026',
            name: 'Unsupervised Learning',
            year: '2026',
            description: 'Discover patterns in data without labels',
            icon: '🌌',
            color: '#00ff88',
            locked: false,
            route: '/galaxy/unsupervised-2026'
        },
        {
            id: 'locked-1',
            name: '',
            year: 'Unlock',
            description: '',
            icon: '🔒',
            color: '#666',
            locked: true,
            route: null
        },
        {
            id: 'locked-2',
            name: '',
            year: 'Unlock',
            description: '',
            icon: '🔒',
            color: '#666',
            locked: true,
            route: null
        },
        {
            id: 'locked-3',
            name: '',
            year: 'Unlock',
            description: '',
            icon: '🔒',
            color: '#666',
            locked: true,
            route: null
        }
    ];

    const handleGalaxyClick = (galaxy) => {
        if (galaxy.locked) return;

        setSelectedGalaxy(galaxy.id);
        setIsFlying(true);

        setTimeout(() => {
            navigate(galaxy.route);
        }, 800);
    };

    return (
        <div className={`galaxy-selection-page ${isFlying ? 'flying-to-galaxy' : ''}`}>
            <Stars count={250} />

            {/* Header */}
            <header className="galaxy-header">
                <div className="galaxy-logo">
                    <span className="logo-icon">🚀</span>
                    <h1>DSS-ML</h1>
                </div>
                <p className="galaxy-subtitle">Select Your Galaxy</p>
            </header>

            {/* Falcon in center */}
            <div className="galaxy-falcon">
                <MillenniumFalcon rotation={selectedGalaxy ? 45 : 0} />
            </div>

            {/* Galaxy cards */}
            <div className="galaxies-container">
                {galaxies.map((galaxy, index) => (
                    <div
                        key={galaxy.id}
                        className={`galaxy-card ${galaxy.locked ? 'locked' : ''} ${selectedGalaxy === galaxy.id ? 'selected' : ''}`}
                        style={{
                            '--galaxy-color': galaxy.color,
                            animationDelay: `${index * 0.1}s`
                        }}
                        onClick={() => handleGalaxyClick(galaxy)}
                    >
                        <div className="galaxy-card-glow" style={{ background: galaxy.color }}></div>
                        <div className="galaxy-card-content">
                            <span className="galaxy-icon">{galaxy.locked ? '🔒' : galaxy.icon}</span>
                            <h2>{galaxy.name}</h2>
                            <span className="galaxy-year">{galaxy.year}</span>
                            <p>{galaxy.description}</p>
                        </div>
                        {!galaxy.locked && (
                            <div className="galaxy-enter">
                                <span>Explore →</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Back button */}
            <button className="back-to-welcome" onClick={() => navigate('/')}>
                ← Back to Welcome
            </button>
        </div>
    );
};

export default GalaxySelection;
