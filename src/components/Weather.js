
export function Weather() {
 
    const weather = require('weather-api-data');
    weather.loction('manama').then(weather => console.log(weather));
    

    return (
        <div>
            {/* {data} */}
        </div>
    )
}