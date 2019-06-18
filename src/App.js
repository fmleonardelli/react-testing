import React, {Component} from 'react';
import WeatherLocation from './components/Weatherlocation'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Weather App        
        <WeatherLocation></WeatherLocation>
      </div>
    );
  }
}

export default App;
