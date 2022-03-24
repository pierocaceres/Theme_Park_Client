import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import ThemePark from './components/ThemePark.jsx'
import RollerCoaster from './components/RollerCoaster';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [themeParks, setThemeParks] = useState([])
  const [rollerCoasters, setRollerCoaster] = useState([])
  
  let navigate = useNavigate()

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
    <div className="App">
       <header>
        <Navigation />
      </header>

        <main>
         <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/themeparks" element={<ThemePark />} />
          <Route exact path="/rollercoasters" element={<RollerCoaster />} />
        </Routes> 
       
      </main>   

    

    </div>
  );
}

export default App;