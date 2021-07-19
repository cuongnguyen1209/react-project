import { useEffect } from 'react';

export function Weather() {
    // const [weatherData, setWeatherData] = useState([]);
    useEffect(()=> {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=nha%20trang,viet%20nam&appid=8d2de98e089f1c28e1a22fc19a24ef04")
            .then(res => res.json())
            // .then(data =>console.log(data))
    }, []);
    
    return (
        <div>
            {/* {weatherData.weather.map((item)=>item.description)} */}
            {/* {weatherData.main.temp_max} */}
       </div>
    )
}