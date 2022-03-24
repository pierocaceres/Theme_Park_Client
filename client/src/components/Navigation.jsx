import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    
    return (
          <nav className="nav" >
            <h1> Disney Parks </h1>
            <div>
                <Link to="/"> Home </Link>
                <Link to="/parks"> Parks </Link>
                <Link to="/coasters"> Coasters </Link>
            </div>    
        </nav>
    );
}

export default Navigation;