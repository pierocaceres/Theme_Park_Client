import React from 'react';
import { useParams } from 'react-router-dom';


function ThemePark(props) {
   let {name} = useParams() 
   console.log(name)

   const themePark = props.themeParks.find((result) => name === result.name)
   console.log(themePark)
   
    return (
        <div className="info">
            <div className='tppicture' >
                <img src={themePark.image} alt="themePark"/>
            </div>
            <div className="infoText">
                 <h1> {themePark.name} </h1>
                 <h4> { themePark.location}</h4>
                 <p> {themePark.description}</p>
            
            </div>

        </div>
    );
}

export default ThemePark;