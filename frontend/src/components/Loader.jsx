import React from 'react';
import './Loader.css'; // Import CSS for styling

const Loader = () => {
    return (
        <div className="skeleton-loader">
            <div className="skeleton-title mb-6"></div>
            <div className="skeleton-paragraph"></div>
            <div className="skeleton-paragraph"></div>
        </div>
    );
};

export default Loader;
