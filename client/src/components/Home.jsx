import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ThemePark from './ThemePark'
import RollerCoaster from './RollerCoaster'



function Home(props) {
    let navigate = useNavigate()

    return (
        <div>
            <h1> Welcome to our page </h1>
            <div className='Theme-Park'>
                <h2>Theme Parks</h2>
                <div className='container-grid'>
                    {props.themeParks.map((themePark) => (
                        <ThemePark 
                            image={themePark.image}
                            name={themePark.name}
                        />
                    ))}
                </div>
            </div>
            <div className='Roller-Coaster'>
                    <h2>Roller Coaster</h2>
                    <div className="container-grid">

                    </div>
            </div>         
        </div>
    );
}

export default Home;