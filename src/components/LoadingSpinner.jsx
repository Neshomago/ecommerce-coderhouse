import React from 'react'

const LoadingSpinner = () => {
    return (
        <div id="spinner-container" className="d-flex flex-column justify-content-center align-items-center">
            <div id="spinner" className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default LoadingSpinner