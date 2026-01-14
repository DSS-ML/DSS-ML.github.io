import React from 'react';

const RoadSVG = () => {
    return (
        <svg className="road-svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <defs>
                {/* Road gradient */}
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1c1c24" />
                    <stop offset="100%" stopColor="#15151d" />
                </linearGradient>

                {/* Glow filters */}
                <filter id="glowGreen" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="glowOrange" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Animated dash pattern */}
                <pattern id="roadLines" patternUnits="userSpaceOnUse" width="60" height="20" patternTransform="rotate(0)">
                    <rect x="0" y="0" width="30" height="6" fill="#ffcc00" opacity="0.8">
                        <animate attributeName="x" from="0" to="60" dur="1s" repeatCount="indefinite" />
                    </rect>
                </pattern>
            </defs>

            {/* Main horizontal road */}
            <rect x="0" y="490" width="1920" height="100" fill="url(#roadGradient)" />
            <line x1="0" y1="540" x2="1920" y2="540" stroke="url(#roadLines)" strokeWidth="4" strokeDasharray="40 30" />

            {/* Left side roads - Unsupervised */}
            {/* Top left diagonal */}
            <path d="M 860 490 Q 700 400 500 280" stroke="url(#roadGradient)" strokeWidth="80" fill="none" />
            <path d="M 860 490 Q 700 400 500 280" stroke="#00ff88" strokeWidth="2" fill="none" opacity="0.5" filter="url(#glowGreen)" />

            {/* Middle left */}
            <path d="M 860 540 Q 600 540 300 540" stroke="url(#roadGradient)" strokeWidth="80" fill="none" />
            <path d="M 860 540 Q 600 540 300 540" stroke="#00ff88" strokeWidth="2" fill="none" opacity="0.5" filter="url(#glowGreen)" />

            {/* Bottom left diagonal */}
            <path d="M 860 590 Q 700 680 500 800" stroke="url(#roadGradient)" strokeWidth="80" fill="none" />
            <path d="M 860 590 Q 700 680 500 800" stroke="#00ff88" strokeWidth="2" fill="none" opacity="0.5" filter="url(#glowGreen)" />

            {/* Right side roads - Deep Learning */}
            {/* Top right diagonal */}
            <path d="M 1060 490 Q 1220 350 1420 200" stroke="url(#roadGradient)" strokeWidth="80" fill="none" />
            <path d="M 1060 490 Q 1220 350 1420 200" stroke="#ff6b35" strokeWidth="2" fill="none" opacity="0.5" filter="url(#glowOrange)" />

            {/* Upper middle right */}
            <path d="M 1060 510 Q 1300 450 1550 380" stroke="url(#roadGradient)" strokeWidth="80" fill="none" />
            <path d="M 1060 510 Q 1300 450 1550 380" stroke="#ff6b35" strokeWidth="2" fill="none" opacity="0.5" filter="url(#glowOrange)" />

            {/* Lower middle right */}
            <path d="M 1060 570 Q 1300 630 1550 700" stroke="url(#roadGradient)" strokeWidth="80" fill="none" />
            <path d="M 1060 570 Q 1300 630 1550 700" stroke="#ff6b35" strokeWidth="2" fill="none" opacity="0.5" filter="url(#glowOrange)" />

            {/* Bottom right diagonal */}
            <path d="M 1060 590 Q 1220 730 1420 880" stroke="url(#roadGradient)" strokeWidth="80" fill="none" />
            <path d="M 1060 590 Q 1220 730 1420 880" stroke="#ff6b35" strokeWidth="2" fill="none" opacity="0.5" filter="url(#glowOrange)" />

            {/* Center intersection circle */}
            <circle cx="960" cy="540" r="120" fill="url(#roadGradient)" stroke="#2a2a3a" strokeWidth="3" />
            <circle cx="960" cy="540" r="80" fill="none" stroke="#ffcc00" strokeWidth="2" strokeDasharray="10 10" opacity="0.4">
                <animateTransform attributeName="transform" type="rotate" from="0 960 540" to="360 960 540" dur="20s" repeatCount="indefinite" />
            </circle>
        </svg>
    );
};

export default RoadSVG;
