import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny : "wi-day-sunny",
    fog : "wi-day-fog"
};

const getWeatherIcon = (weatherState) => (
   
    <WeatherIcons name={icons[weatherState]} size="2x" />
);

const WeatherTemperature = (props) => (
    <div>
        {getWeatherIcon(props.weatherState)}
        <span>{`${props.temperature} C°`}</span>
    </div>
);

export default WeatherTemperature;