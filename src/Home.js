import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    state = {
        city: ''
    };

    handleChangeCity  = event => this.setState({city: event.target.value});

    render() {

        const {city} = this.state;

        return (
            <div className="container">
                <div>
                    <h1>Weather Application</h1>
                    <input className="input" value={city} onChange={this.handleChangeCity} autoFocus/>
                    <Link className="button" to={'/weather/' + city}>Get Weather</Link>
                </div>
            </div>
        );
    }
}

export default Home;