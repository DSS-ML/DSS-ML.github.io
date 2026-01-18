import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stars from './Stars';
import MillenniumFalcon from './MillenniumFalcon';

const WelcomePage = () => {
    const navigate = useNavigate();
    const [isJumping, setIsJumping] = useState(false);

    const handleEnterHyperspace = () => {
        setIsJumping(true);
        setTimeout(() => {
            navigate('/galaxies');
        }, 1500);
    };

    return (
        <div className={`welcome-page ${isJumping ? 'hyperspace-jump' : ''}`}>
            <Stars count={300} />

            {/* Hyperspace lines effect when jumping */}
            {isJumping && (
                <div className="hyperspace-lines">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="hyperspace-line"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 0.3}s`
                            }}
                        />
                    ))}
                </div>
            )}

            <div className="welcome-content">
                {/* Star Wars style yellow text */}
                <div className="welcome-crawl">
                    <h1 className="welcome-title">Welcome to DSS-ML</h1>
                    <p className="welcome-subtitle">
                        A GitHub profile dedicated to teaching<br />
                        Data Science & Machine Learning
                    </p>
                    <p className="welcome-tagline">
                        Explore the galaxy of knowledge through<br />
                        interactive notebooks and hands-on projects
                    </p>
                </div>

                {/* Millennium Falcon */}
                <div className="welcome-falcon">
                    <MillenniumFalcon rotation={0} />
                </div>

                {/* Enter button */}
                <button
                    className="hyperspace-button"
                    onClick={handleEnterHyperspace}
                    disabled={isJumping}
                >
                    <span className="button-icon">🚀</span>
                    <span className="button-text">
                        {isJumping ? 'Jumping to Hyperspace...' : 'Enter Hyperspace'}
                    </span>
                </button>
            </div>

            {/* Footer */}
            <div className="welcome-footer">
                <a href="https://github.com/DSS-ML" target="_blank" rel="noopener noreferrer">
                    GitHub: DSS-ML
                </a>
            </div>
        </div>
    );
};

export default WelcomePage;
