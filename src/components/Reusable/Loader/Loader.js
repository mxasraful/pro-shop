import React from 'react';

const Loader = () => {
    return (
        <div className="text-center">
            <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;