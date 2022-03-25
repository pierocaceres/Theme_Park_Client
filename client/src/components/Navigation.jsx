import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    
    return (
        <nav className="nav" >
            <h1> Disney World Florida </h1>
            <div className="link-button">
                <button><Link to="/"> Home </Link></button>
                <button><Link to="/rollercoasters"> Coasters </Link></button>
            </div>    
        </nav>
    );
}

export default Navigation;