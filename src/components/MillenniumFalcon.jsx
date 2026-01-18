import React from 'react';
import milleniumImg from '../assets/millenium.png';

const MillenniumFalcon = ({ rotation = 0 }) => {
    return (
        <div
            className="shuttle-container"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <img
                src={milleniumImg}
                alt="Millennium Falcon"
                className="shuttle"
                style={{
                    width: '120px',
                    height: 'auto',
                    filter: 'drop-shadow(0 0 20px rgba(135, 206, 235, 0.6))'
                }}
            />
        </div>
    );
};

export default MillenniumFalcon;
