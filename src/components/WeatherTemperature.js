import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const icons = {
    sunny : "day-sunny",
    fog : "day-fog"
};

const getWeatherIcon = (weatherState) => (
   
    <WeatherIcons name={icons[weatherState]} size="2x" />
);

const WeatherTemperature = (props) => {
    return (<div>
        {getWeatherIcon(props.weatherState)}        
        <span>{`${props.temperature} C°`}</span>
    </div>);
};

WeatherTemperature.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired
}

export default WeatherTemperature;