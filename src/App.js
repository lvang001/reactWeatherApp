
import React from 'react';
import './App.css';
import Forecast from './Forecast.js';


function App() {
   
  // useEffects();
  return (
    <div className="App">
    <header className="App-header">
      <h3>React Weather App</h3>
    </header>
    <main>
      <Forecast />
    </main>
    <footer>
      
    </footer>
  </div>

      // {/* const apiKey = process.env.REACT_API_KEY;
      // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=${apiKey}`
      //  */}
  
  );
}

export default App;
