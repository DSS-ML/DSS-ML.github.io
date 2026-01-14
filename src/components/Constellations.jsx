import React from 'react';

const Constellations = () => {
    return (
        <svg className="constellations-svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <defs>
                {/* Glow filters */}
                <filter id="greenGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="orangeGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* LEFT CONSTELLATION - Unsupervised Learning (Green) */}
            <g className="constellation unsupervised-constellation">
                {/* Constellation lines connecting the planets */}
                <line x1="480" y1="200" x2="280" y2="450" stroke="#00ff88" strokeWidth="1" opacity="0.4" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="280" y1="450" x2="480" y2="750" stroke="#00ff88" strokeWidth="1" opacity="0.4" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="480" y1="200" x2="480" y2="750" stroke="#00ff88" strokeWidth="1" opacity="0.2" strokeDasharray="3,8">
                    <animate attributeName="stroke-dashoffset" values="0;11" dur="3s" repeatCount="indefinite" />
                </line>

                {/* Small stars in constellation */}
                <circle cx="380" cy="320" r="2" fill="#00ff88" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="350" cy="550" r="1.5" fill="#00ff88" opacity="0.5">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="420" cy="480" r="2" fill="#00ff88" opacity="0.4">
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.8s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* RIGHT CONSTELLATION - Deep Learning (Orange) */}
            <g className="constellation deep-learning-constellation">
                {/* Constellation lines connecting the planets */}
                <line x1="1440" y1="150" x2="1580" y2="350" stroke="#ff6b35" strokeWidth="1" opacity="0.4" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="1580" y1="350" x2="1580" y2="600" stroke="#ff6b35" strokeWidth="1" opacity="0.4" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="1580" y1="600" x2="1440" y2="850" stroke="#ff6b35" strokeWidth="1" opacity="0.4" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="1440" y1="150" x2="1440" y2="850" stroke="#ff6b35" strokeWidth="1" opacity="0.2" strokeDasharray="3,8">
                    <animate attributeName="stroke-dashoffset" values="0;11" dur="3s" repeatCount="indefinite" />
                </line>
                <line x1="1440" y1="150" x2="1580" y2="600" stroke="#ff6b35" strokeWidth="1" opacity="0.15" strokeDasharray="4,6">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="2.5s" repeatCount="indefinite" />
                </line>

                {/* Small stars in constellation */}
                <circle cx="1500" cy="250" r="2" fill="#ff6b35" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="1520" cy="480" r="1.5" fill="#ff6b35" opacity="0.5">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="1480" cy="700" r="2" fill="#ff6b35" opacity="0.4">
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="1550" cy="200" r="1" fill="#ff6b35" opacity="0.3">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
                </circle>
            </g>
        </svg>
    );
};

export default Constellations;
