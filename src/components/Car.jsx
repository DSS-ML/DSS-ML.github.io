import React from 'react';

const Car = () => {
    return (
        <div className="car-container">
            <div className="car">
                {/* Wheels */}
                <div className="car-wheel front-left"></div>
                <div className="car-wheel front-right"></div>
                <div className="car-wheel back-left"></div>
                <div className="car-wheel back-right"></div>

                {/* Body */}
                <div className="car-body"></div>

                {/* Windshield */}
                <div className="car-windshield"></div>

                {/* Headlights */}
                <div className="car-headlight left"></div>
                <div className="car-headlight right"></div>
            </div>
        </div>
    );
};

export default Car;
