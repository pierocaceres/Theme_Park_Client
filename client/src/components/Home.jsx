import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ThemePark from './ThemePark'
import RollerCoaster from './RollerCoaster'
import TPData from '../data/themeParkData'
import RCData from '../data/rollerCoasterData'


function Home(props) {
    let navigate = useNavigate()
    themeParks.forEach((themePark) => console.log(themePark))

    return (
        <div>
            <div>
           <h1> Welcome to our page </h1>
      <h2>Theme Parks</h2>
      <div className='container-grid'>
      </div>
      <div className='Roller-Coaster'>
                <h2>Roller Coaster</h2>
                <div className="container-grid">
                </div>
      </div>
           </div>
         
        </div>
    );
}

export default Home;