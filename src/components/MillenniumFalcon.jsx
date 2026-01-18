import React from 'react';

const MillenniumFalcon = ({ rotation = 0 }) => {
    return (
        <div
            className="shuttle-container"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <svg
                width="140"
                height="100"
                viewBox="0 0 140 100"
                className="shuttle"
            >
                {/* Main circular body */}
                <ellipse cx="70" cy="50" rx="50" ry="35" fill="url(#falconBody)" />
                
                {/* Cockpit arm - right side */}
                <path d="M 110 45 L 135 35 L 138 42 L 135 50 L 110 50 Z" fill="url(#falconBody)" />
                <ellipse cx="136" cy="42" rx="6" ry="6" fill="#1a2030" stroke="#00d4ff" strokeWidth="1.5" />
                <ellipse cx="136" cy="42" rx="3" ry="3" fill="#00d4ff" opacity="0.5" />
                
                {/* Forward mandibles */}
                <path d="M 15 35 L 5 40 L 5 48 L 15 52 L 30 50 L 30 38 Z" fill="#606070" />
                <path d="M 15 48 L 5 53 L 5 61 L 15 65 L 30 62 L 30 50 Z" fill="#505060" />
                
                {/* Gap between mandibles */}
                <rect x="8" y="48" width="20" height="5" fill="#0a0a15" />
                
                {/* Top details - sensor dish */}
                <circle cx="70" cy="35" r="12" fill="#404050" stroke="#555" strokeWidth="1" />
                <circle cx="70" cy="35" r="8" fill="#303040" />
                <circle cx="70" cy="35" r="3" fill="#00d4ff" opacity="0.7">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
                </circle>
                
                {/* Engine glow - back */}
                <ellipse cx="115" cy="50" rx="8" ry="20" fill="url(#falconEngineGlow)" opacity="0.8">
                    <animate attributeName="rx" values="8;12;8" dur="0.3s" repeatCount="indefinite" />
                </ellipse>
                
                {/* Engine flames */}
                <ellipse cx="122" cy="50" rx="6" ry="15" fill="#87CEEB" opacity="0.7">
                    <animate attributeName="rx" values="6;10;6" dur="0.2s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="126" cy="50" rx="4" ry="10" fill="#ffffff" opacity="0.5">
                    <animate attributeName="rx" values="4;7;4" dur="0.15s" repeatCount="indefinite" />
                </ellipse>
                
                {/* Hull panel lines */}
                <line x1="30" y1="45" x2="90" y2="45" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
                <line x1="30" y1="55" x2="90" y2="55" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
                <line x1="50" y1="25" x2="50" y2="75" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" />
                <line x1="85" y1="30" x2="85" y2="70" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" />
                
                {/* Small details */}
                <circle cx="40" cy="40" r="2" fill="rgba(255,255,255,0.3)" />
                <circle cx="55" cy="60" r="2" fill="rgba(255,255,255,0.3)" />
                <rect x="75" y="55" width="8" height="4" rx="1" fill="#333" />
                
                {/* Gradient definitions */}
                <defs>
                    <linearGradient id="falconBody" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#b0b0b8" />
                        <stop offset="30%" stopColor="#909098" />
                        <stop offset="70%" stopColor="#707078" />
                        <stop offset="100%" stopColor="#505058" />
                    </linearGradient>
                    <radialGradient id="falconEngineGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#87CEEB" />
                        <stop offset="50%" stopColor="#4169E1" />
                        <stop offset="100%" stopColor="#0000aa" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};

export default MillenniumFalcon;
