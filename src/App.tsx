//@ts-ignore
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// @ts-ignore
import Layout from './components/Layout.tsx';
// @ts-ignore
import Search from './components/Search.tsx';
import { WeatherData } from './types/types';
//@ts-ignore
import ShowWeather from './components/ShowWeather.tsx';
//@ts-ignore
import Loader from './components/Loader.tsx'

function App() {

  const [search, setSearch] = useState('');
  const [loader, setLoader] = useState(false);
  const [weather, setWeather] = useState<WeatherData>();
  const [error, setError] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_WEATHERMAP_API_KEY}&lang=it`
    fetchWearher(endpoint);
  
  }

  const fetchWearher = async (url) => {
    try {

      setLoader(true);
      const fecthData = await fetch(url);
      const data = await fecthData.json();

      setWeather(data);
      setLoader(false);
      setSearch('');

    } catch (error) {
      setError(error);
      setLoader(false);
    }
  }

  return (
    <Layout>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className='text-4xl my-6'>React weather app</h1>
      {weather &&
          <ShowWeather
            weatherData={weather}
            search={search}
          />
      
      }
      {loader ?
        <Loader />
      :
        <Search 
          search={search}
          onChangeSearch={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
      }
    </Layout>
  );
}

export default App;
