import React from 'react';
import WeatherExtraInfo from '../WeatherExtraInfo';
import WeatherTemperature from '../WeatherTemperature';
import {SUN} from '../../constants/Weathers';
import './styles.css';

const WeatherData = ({data : {temperature, weatherState, humidity, wind}}) => {
    return (<div className="weatherDataCont">        
        <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>);
};

export default WeatherData;