import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ThemePark from '../components/ThemePark'
import RollerCoaster from '../components/RollerCoaster'

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
                            onClick={() => navigate(`/themeparks/${themePark.name}`)}
                        />
                    ))}
                </div>
            </div>
            <div className='Roller-Coaster'>
                {/* <h2>Roller Coaster</h2>
                <div className="container-grid">
                   {props.rollerCoasters.map((rollerCoaster) => (
                       <RollerCoaster 
                            image={rollerCoaster.image}
                            name={rollerCoaster.name}
                            onClick={() => navigate(`/rollercoaster/${rollerCoaster.name}`)}
                       />
                   ))}
                </div> */}
            </div>         
        </div>
    );
}

export default Home;