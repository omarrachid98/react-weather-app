import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// @ts-ignore
import Layout from './components/Layout.tsx';
// @ts-ignore
import Search from './components/Search.tsx';

function App() {

  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Layout>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className='text-4xl my-6'>React weather app</h1>
      <Search 
          search={search}
          onChangeSearch={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
    </Layout>
  );
}

export default App;
