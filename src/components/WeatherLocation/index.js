import React, { Component } from 'react';
import Location from '../Location';
import WeatherData from '../WeatherData';
import {SUN} from '../../constants/Weathers'

const data = {
    temperature : 5,
    weatherState : SUN,
    humidity : 10,
    wind : "10 m/s"
};

class WeatherLocation extends Component {
    
    constructor() {
        super();
        this.state = {
            city : "Barcelona",
            data : data
        }
    }

    handle = () => {
        console.log("Actualizado");
        this.setState({
            city : "Buenos Aires"
        });
    }
    
    render() {
        return (
        <div>
            <Location city={this.state.city}></Location>
            <WeatherData data={this.state.data}></WeatherData>
            <button onClick={this.handle}>Actualizar</button>
        </div>);
    }
};

export default WeatherLocation;