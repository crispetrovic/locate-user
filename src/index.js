import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component {
    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log('Updated');
    }

    renderContent () {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return <LoadingSpinner 
                message="Please accept location request to continue."
                />;
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);