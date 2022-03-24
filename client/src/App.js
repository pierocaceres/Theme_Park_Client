import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;