import React, { useMemo } from "react";
import { WeatherProps } from "../types/types";


const ShowWeather = ({weatherData} : WeatherProps) => {

    /* To do:
        * fix if api call return []
        * fix types
        * added some new css
    */

    const kelvinToCelsius = (temp) => {
        return Math.floor(temp - 273.15);
    }

    const capitalizeText = (text: string) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    //set background color based on current weather data
    const weatherBkgColor = {
        Rain: 'bg-gray-900',
        Clouds: 'bg-gray-400',
        Clear: 'bg-blue-400'
    }

    const mapMainWeather = {
        Clouds : 'Nuvoloso',
        Clear: 'Soleggiato',
        Rain: 'Pioggia',
        Frosty: 'Nebbia'
    }

    return (
        <div className={`flex flex-col items-center justify-center w-full my-10`}>
            {weatherData.weather.map((weather, index) => {

                const urlIcon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
                const temp = kelvinToCelsius(weatherData.main.temp)
                return (
                    <div key={index} className="flex flex-col items-center justify-center w-full">
                        <div className={`${weatherBkgColor[weather.main]} w-full h-full flex flex-col items-center justify-center py-10 rounded-xl border-2 border-solid border-white`}>
                            <div className="flex items-center justify-center flex-col">
                                <img src={urlIcon} alt="weather_icon" />
                                <h3 className="text-white"> {temp} &deg;C </h3>
                            </div>
                            <h1>{mapMainWeather[weather.main]}</h1>
                            <p className="text-white">{capitalizeText(weather.description)}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ShowWeather;