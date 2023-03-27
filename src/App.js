import React, { useState } from 'react';
import './App.css';
import Section from './components/Section';
import { GiMoebiusTriangle } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import zzlogo from './zz-dats-logo.png';
import Data from './data/Data';

function App() {

  const [showData, setShowData] = useState(-1)

  function handleClick(id) {
    setShowData(id);
  }

  return (
    <div className="App">
      <header className="header">
        <div className='header-left'>
          <GiMoebiusTriangle className='logo' />
          <h1 onClick={() => handleClick(-1)}>Testa uzdevums</h1>
        </div>
        <div className='header-right'>
          <CgProfile className='profile-icon' />
          <div className='user-info'>
            <h1>Jānis Bērziņs</h1>
            <p>"ZZ Dats" praktikants</p>
          </div>
        </div>

      </header>
      <div className='container'>
        <div className='sidebar'>
          <div className='top-chatpers'>
            <h1 onClick={() => handleClick(0)}>Sadaļa 1</h1>
            <h1 onClick={() => handleClick(1)}>Sadaļa 2</h1>
            <h1 onClick={() => handleClick(2)}>Sadaļa 3</h1>
          </div>
          <h1 onClick={() => handleClick(3)}>Sadaļa 4</h1>
        </div>
        <div className='main-container'>
          <div className='main'>
            {showData === -1 ?
              <h1>Sveicināti! Izvēlaties sadaļu</h1> :
              <Section title={Data[showData].title}
                paragraph1={Data[showData].paragraph1}
                paragraph2={Data[showData].paragraph2}
                paragraph3={Data[showData].paragraph3}
                paragraph4={Data[showData].paragraph4}
              />}
          </div>
          <div className='footer'>
            <img src={zzlogo} alt='ZZ Dats logo'></img>
            <a href='https://www.zzdats.lv/'>https://www.zzdats.lv/</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
