import React from 'react';
import classes from './Conditions.module.css'
import Date from './DateTime.js'


const Conditions = (props) => {
   return (
       
       <div className={classes.Card}>
           
           {props.responseObj.cod === 200 ?
               <div className="card">
                   
                   <p><h1>{props.responseObj.name}</h1></p>
                   <p>{props.Date}</p>
                   <p>Current Temp: {Math.round(props.responseObj.main.temp)}°</p> 
                   <p>{props.responseObj.weather[0].description}</p>
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