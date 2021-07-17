import { useEffect, useState } from 'react';


export function Weather() {
    const [data, getData] = useState([]);

 
    const weather = require('weather-api-data');
    weather.loction('manama').then(weather => console.log(weather));
    

    return (
        <div>
            {/* {data} */}
        </div>
    )
}