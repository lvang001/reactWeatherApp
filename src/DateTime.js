import React from 'react';

const Date = () => {
    let date = new Date()
    let displayDate = date.toDateString();
    return (
        <div>
           {displayDate}
        </div>
    )
}


export default Date;