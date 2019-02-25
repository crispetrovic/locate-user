import React from 'react';

const LoadingSpinner = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui huge text loader">
                {props.message}
            </div>
        </div>
    );
};

LoadingSpinner.defaultProps = {
    message: 'Loading...'
};

export default LoadingSpinner;