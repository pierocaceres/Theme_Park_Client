import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ThemePark from './ThemePark'
//import RollerCoaster from './RollerCoaster'
import TPData from '../data/themeParkData'
import RCData from '../data/rollerCoasterData'

function Home(props) {
    const [themeParks, setThemeParks] = useState([])
    const [rollerCoasters, setRollerCoaster] = useState([])
    
    let navigate = useNavigate()

    const getThemePark = async () => {
        // const result = await axios.get() 
        // setThemeParks(result)   
        setThemeParks(TPData)
    }

    const getRollerCoaster = async () => {
        const result = await axios.get()
        setRollerCoaster(result)//Look at result path
    }

    useEffect( () => {
        getThemePark()
        getRollerCoaster()
    }, [])

    themeParks.forEach((themePark) => console.log(themePark))
    return (
        <div>
            <div className='Theme-Park'>
                <h2>Theme Parks</h2>
                <div className='container-grid'>
                    {themeParks.map((themePark) => (
                    <ThemePark key={themePark.id}
                        name={themePark.name}
                        image={themePark.image}
                        onClick={() => navigate(`/parks/${themePark.name}`)}
                    />
                    
                     ))}
                </div>
            </div>
            <div className='Roller-Coaster'>
                <h2>Roller Coaster</h2>
                <div className="container-grid">
                    {/* {rollerCoasters.map((rollerCoaster) => (
                        <RollerCoaster key={rollerCoaster.id}
                        name={rollerCoaster.name}
                        description={rollerCoaster.description}
                        min_height={rollerCoaster.min_height}
                        max_speed={rollerCoaster.max_speed}
                        length={rollerCoaster.length}
                        type={rollerCoaster.type}
                        location={rollerCoaster.id} //Grab the name of the from ThemePark }
                        onClick={() => navigate(`/roller-coaster/${rollerCoaster.name}`)}
                        />
                    ))} */}
                </div>
            </div>
        </div>
    );
}

export default Home;