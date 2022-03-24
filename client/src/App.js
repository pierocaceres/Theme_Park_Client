import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
