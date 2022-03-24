import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigation } from 'react-router-dom'
import axios from 'axios'
import ThemePark from './ThemePark'

function Home(props) {
    const [themeParks, setThemeParks] = useState([])
    const [rollerCoaster, setRollerCoaster] = useState([])
    
    let navigate = useNavigation()

    const getThemePark = async () => {
        const result = await axios.get() 
        setThemeParks(result)   
    }

    const getRollerCoaster = async () => {
        const result = await axios.get()
        setRollerCoaster(result)//Look at result path
    }

    useEffect( () => {
        getThemePark()
        getRollerCoaster()
    }, [])

    return (
        <div>
            <div className='Theme-Park'>
                <h2>Theme Parks</h2>
                {/* <ThemePark key={themeParks.id}
                name={themeParks.name}
                description={themeParks.description}
                location={themeParks.location}
                image={themeParks.image}
                /> */}
            </div>
            <div className='Roller-Coaster'>
                <h2>Roller Coaster</h2>

            </div>
        </div>
    );
}

export default Home;