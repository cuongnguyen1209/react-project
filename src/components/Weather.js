import { useEffect } from 'react';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';

export function Weather() {
    // const [weatherData, setWeatherData] = useState([]);
    useEffect(()=> {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Ho%20Chi%20Minh,viet%20nam&appid=8d2de98e089f1c28e1a22fc19a24ef04")
            .then(res => res.json())
            // .then(data =>setWeatherData(data))
    }, []);

    // const weather = useSelector((state)=>state.flightSearch.weatherData);
    
    return (
        <div>
            
       </div>
    )
}