import React from 'react';
import './Preloader.css';

const Preloader = () => {
    return (
        <div className="preloader">
            <svg viewBox="0 0 800 600">
                <symbol id="s-text">
                    <text textAnchor="middle"
                        x="50%"
                        y="50%"
                        className="text--line"
                    >
                        Sohel Islam Imran
                    </text>
                </symbol>
                <g className="g-ants">
                    <use xlinkHref="#s-text"
                        className="text-copy"></use>
                    <use xlinkHref="#s-text"
                        className="text-copy"></use>
                    <use xlinkHref="#s-text"
                        className="text-copy"></use>
                    <use xlinkHref="#s-text"
                        className="text-copy"></use>
                    <use xlinkHref="#s-text"
                        className="text-copy"></use>
                </g>
            </svg>
        </div>
    );
};

export default Preloader;