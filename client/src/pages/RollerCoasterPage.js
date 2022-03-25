import React from 'react';
import { useParams } from 'react-router-dom';

function RollerCoaster(props) {
    let {name} = useParams() 
    console.log(name)

    const rollerCoaster = props.rollerCoasters.find((result) => name === result.name)
    console.log(rollerCoaster)

    return (
        <div className="infocoaster">
            <h1> {rollerCoaster.name} </h1>
        <div className='rcpicture' >
            <img src={rollerCoaster.image} alt="rollerCoaster"/>
        </div>
        <div className="infoTextCoaster">
             <h4>Minimum height: {rollerCoaster.min_height}</h4>
             <h4> Length: {rollerCoaster.length}</h4>
            <h4>Max Speed: {rollerCoaster.max_speed}</h4>
            <h4>{rollerCoaster.type}</h4>
             <p> {rollerCoaster.description}</p>
        </div>

    </div>
       
    );
}

export default RollerCoaster;