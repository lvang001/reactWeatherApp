import React from 'react';
import classes from './Conditions.module.css'


const Conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div className="card">
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>Current Temp: {Math.round(props.responseObj.main.temp)}° with {props.responseObj.weather[0].description}</p>
                   <p>High Temp: {Math.round(props.responseObj.main.temp_max)}°</p>
                   <p>Low Temp: {Math.round(props.responseObj.main.temp_min)}°</p>
                   <p>Humidity: {props.responseObj.main.humidity}%</p>
               </div>
           : null
           }
       </div>
   )
}
export default Conditions;