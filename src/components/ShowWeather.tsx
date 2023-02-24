import React, { useMemo } from "react";
import { WeatherProps } from "../types/types";


const ShowWeather = ({weatherData, search} : WeatherProps) => {

    /* To do:
        * fix if api call return []
        * fix types
        * added some new css
    */
    console.log(weatherData)
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
            {weatherData.cod === 200 && weatherData.weather.map((weather, index) => {

                const { temp, temp_min, temp_max } = weatherData.main
                const {name} = weatherData
                const {speed} = weatherData.wind;
                const clouds = weatherData.clouds.all

                const urlIcon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
                console.log(weather)
                return (
                    <div key={index} className="flex flex-col items-center justify-center w-full">
                        <div className={`${weatherBkgColor[weather.main]} w-full h-full flex flex-col items-center justify-center p-6 rounded-xl border-2 border-solid border-white`}>
                            <div className="flex items-center justify-center flex-col my-4">
                                <h1 className='text-2xl text-center'>{name}</h1>
                                <img src={urlIcon} alt="weather_icon" />
                                <h3 className="text-white text-2xl"> {kelvinToCelsius(temp)} &deg;C </h3>
                                <span className='text-white text-xl'> Min: {kelvinToCelsius(temp_min)} &deg;C | Max: {kelvinToCelsius(temp_max)} &deg;C </span>
                            </div>
                            <h3 className='text-white text-2xl'>{mapMainWeather[weather.main]}</h3>
                            <p className="text-white text-xl">{capitalizeText(weather.description)}</p>
                            <div className='my-6 text-center '>
                                <p className="text-white text-xl"> Nuvolosità:  {clouds}% </p>
                                <p className="text-white text-xl"> Velocità vento: {speed} m/s </p>
                            </div>
                        </div>
                    </div>
                )
            })}
            {weatherData.cod !== 200 && (
                <h1 className='text-2xl'> Città non trovata </h1>
            )}
        </div>
    )
}

export default ShowWeather;