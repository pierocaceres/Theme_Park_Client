import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import ThemePark from './components/ThemePark.jsx'

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/themepark" element={<ThemePark />} /> */}
          <Route path="/themepark/:parkName" />
          <Route path="/roller-coaster/:coasterName" />
        </Routes>
      </main>
    </div>
  );
}

export default App;