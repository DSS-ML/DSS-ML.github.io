import React from 'react';

const SpaceShuttle = ({ rotation = 0 }) => {
    return (
        <div
            className="shuttle-container"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <svg
                width="120"
                height="60"
                viewBox="0 0 120 60"
                className="shuttle"
            >
                {/* Main body */}
                <ellipse cx="60" cy="30" rx="45" ry="15" fill="url(#shuttleBody)" />

                {/* Cockpit window */}
                <ellipse cx="90" cy="30" rx="12" ry="8" fill="#0a1628" stroke="#00d4ff" strokeWidth="2" />
                <ellipse cx="92" cy="28" rx="6" ry="4" fill="#00d4ff" opacity="0.3" />

                {/* Wings */}
                <path d="M 40 30 L 20 50 L 50 35 Z" fill="url(#wingGradient)" />
                <path d="M 40 30 L 20 10 L 50 25 Z" fill="url(#wingGradient)" />

                {/* Tail fin */}
                <path d="M 15 30 L 5 20 L 15 25 Z" fill="#ff4466" />
                <path d="M 15 30 L 5 40 L 15 35 Z" fill="#cc2244" />

                {/* Engine glow */}
                <ellipse cx="12" cy="30" rx="8" ry="6" fill="url(#engineGlow)">
                    <animate attributeName="rx" values="8;10;8" dur="0.3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="0.3s" repeatCount="indefinite" />
                </ellipse>

                {/* Engine flames */}
                <ellipse cx="2" cy="30" rx="6" ry="4" fill="#ff6b35" opacity="0.8">
                    <animate attributeName="rx" values="6;10;6" dur="0.2s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="-2" cy="30" rx="4" ry="3" fill="#ffcc00" opacity="0.6">
                    <animate attributeName="rx" values="4;8;4" dur="0.15s" repeatCount="indefinite" />
                </ellipse>

                {/* Body details */}
                <line x1="30" y1="30" x2="70" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <circle cx="75" cy="30" r="3" fill="rgba(255,255,255,0.3)" />

                {/* Gradient definitions */}
                <defs>
                    <linearGradient id="shuttleBody" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e8e8e8" />
                        <stop offset="50%" stopColor="#c0c0c0" />
                        <stop offset="100%" stopColor="#909090" />
                    </linearGradient>
                    <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#404050" />
                        <stop offset="100%" stopColor="#606070" />
                    </linearGradient>
                    <radialGradient id="engineGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#00d4ff" />
                        <stop offset="100%" stopColor="#0066aa" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};

export default SpaceShuttle;
