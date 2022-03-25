import './style/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import ThemePark from './components/ThemePark'
import RollerCoaster from './components/RollerCoaster';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TPData from './data/themeParkData'
import RCData from './data/rollerCoasterData'
import ThemeParkPage from './pages/ThemeParkPage';
import RollerCoasterPage from './pages/RollerCoasterPage';

function App() {
  const [themeParks, setThemeParks] = useState([])
  const [rollerCoasters, setRollerCoaster] = useState([])
  
  let navigate = useNavigate()

  const getThemePark = async () => {
    // const result = await axios.get()
    // setThemeParks(result)   
    setThemeParks(TPData)
  }

  const getRollerCoaster = async () => {
    // const result = await axios.get()
    // setRollerCoaster(result)//Look at result path
    setRollerCoaster(RCData)
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
          <Route exact path="/" element={<Home themeParks={themeParks} rollerCoasters={rollerCoasters} />}/>
          <Route exact path="/themeparks/:name" element={ <ThemeParkPage themeParks = {themeParks} />}  />
          <Route exact path="/rollercoaster/:name" element={
          <RollerCoasterPage rollerCoasters = { rollerCoasters } />
          } />
        </Routes> 
       
      </main>   

    

    </div>
  );
}

export default App;