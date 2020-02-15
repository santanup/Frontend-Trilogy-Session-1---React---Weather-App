import React from 'react';
import { Link } from 'react-router-dom';

class Weather extends React.Component {

    state = {
        loading: true,
        result: null
    };

    componentDidMount() {
        console.log(this.props);
        const {match: {params}} = this.props;
        const {city} = params;
        fetch(`https://openweathermap.org/data/2.5/find?q=${city}&type=like&sort=population&cnt=30&appid=b6907d289e10d714a6e88b30761fae22&_=1581787950200`)
            .then(response =>  response.json())
            .then(({list}) => {
                console.log(list);
                if(list && list.length) {
                    this.setState({result: list[0], loading: false});
                } else {
                    this.setState({loading: false});
                }
            });
    }

    render() {
        // console.log(this.state.result);
        const {result, loading} = this.state;

        return (
            <div className="container">
                {
                    loading ?
                        <div className="loader"/> :
                        <div className="report">
                            {
                                result ?
                                    <React.Fragment>
                                        <div>City: {result.name}, {result.sys.country}</div>
                                        <div>Feels Like: {result.main.feels_like}</div>
                                        <div>Humidity: {result.main.humidity}</div>
                                        <div>Pressure: {result.main.pressure}</div>
                                        <div>Temperature: {result.main.temp}</div>
                                        <div>Wind Speed: {result.wind.speed}</div>
                                    </React.Fragment> :
                                    <h2 style={{textAlign: 'center'}}>No Result Found</h2>
                            }
                            <Link className="button" to="/">Search New</Link>
                        </div>
                }
            </div>
        )
    }
}

export default Weather;