import React from 'react';

const Motorcycle = ({ rotation = 0 }) => {
    return (
        <div
            className="motorcycle-container"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <svg
                width="60"
                height="100"
                viewBox="0 0 60 100"
                className="motorcycle"
            >
                {/* Back wheel */}
                <ellipse cx="30" cy="85" rx="18" ry="12" fill="#1a1a1a" />
                <ellipse cx="30" cy="85" rx="14" ry="9" fill="#333" />
                <ellipse cx="30" cy="85" rx="6" ry="4" fill="#555" />

                {/* Bike frame/body */}
                <path
                    d="M 25 75 Q 20 60 25 45 L 35 45 Q 40 60 35 75 Z"
                    fill="url(#bikeBody)"
                />

                {/* Front wheel */}
                <ellipse cx="30" cy="25" rx="15" ry="10" fill="#1a1a1a" />
                <ellipse cx="30" cy="25" rx="11" ry="7" fill="#333" />
                <ellipse cx="30" cy="25" rx="4" ry="3" fill="#555" />

                {/* Handlebars */}
                <rect x="15" y="30" width="30" height="4" rx="2" fill="#444" />
                <circle cx="15" cy="32" r="4" fill="#666" />
                <circle cx="45" cy="32" r="4" fill="#666" />

                {/* Headlight */}
                <ellipse cx="30" cy="18" rx="6" ry="4" fill="#ffff88" className="headlight">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
                </ellipse>

                {/* Rider silhouette */}
                <ellipse cx="30" cy="50" rx="8" ry="6" fill="#222" /> {/* Body */}
                <circle cx="30" cy="40" r="7" fill="#1a1a1a" /> {/* Helmet */}
                <rect x="27" y="38" width="6" height="3" rx="1" fill="#00d4ff" opacity="0.8" /> {/* Visor */}

                {/* Exhaust glow */}
                <ellipse cx="38" cy="78" rx="4" ry="3" fill="#ff6b35" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="0.5s" repeatCount="indefinite" />
                </ellipse>

                {/* Gradient definitions */}
                <defs>
                    <linearGradient id="bikeBody" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff2d55" />
                        <stop offset="50%" stopColor="#ff4466" />
                        <stop offset="100%" stopColor="#cc1133" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default Motorcycle;
