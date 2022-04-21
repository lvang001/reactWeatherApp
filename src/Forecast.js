import React, { useState } from 'react';
import Conditions from './Conditions';
import classes from './Forecast.module.css';


const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});
    let [zip, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    const apiKey =`973777b137d46a204965f0cb350c9220`

    function getForecast (e) {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=`+ apiKey)
        .then(res => res.json())
        .then(res => {setResponseObj(res)})
        .catch(err => console.error(err));
    }
    return (
    <div className = {classes.Card}>
        <h1>Weather</h1>
        <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="ZipCode"
                    maxLength="50"
                    className ={classes.textInput}
                    value={zip}
                    onChange={(e) => setCity(e.target.value)}
                    />
             
                <button type="submit" className ={classes.Button}>Display Forecast</button>
            </form>
           <Conditions responseObj={responseObj}/>
    </div>
    )
            
    
}

export default Forecast;