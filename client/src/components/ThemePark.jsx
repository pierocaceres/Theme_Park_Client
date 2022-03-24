import React from 'react'
// import { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'



let info = [ 
    {
        name: "Disney",
        url: 'https://i.imgur.com/8KLbDxe.jpeg'
    }
]



export default function ThemePark(props) {
    return (
        <div className="card">
            <img src={info[0].url} />
            <h3>Theme Park Name</h3>
            <p>Description </p>
          </div>
      )
}

{/* <div className='Theme-Park'>
                <h2>Theme Parks</h2>
                {themeParks.map((themePark) => (
                    <ThemePark key={themePark.id}
                        name={themePark.name}
                        description={themePark.description}
                        location={themePark.location}
                        image={themePark.image}
                    />
                ))} 
            </div> */}



// <ThemePark key ={themeParks.id}
// <h1>{props.themeParks.name}</h3>
// <h3>{props.themeParks.location</h3>
// <p>{props.themeParks.description}</p>
{/* <img src={props.ThemeParks.image}> </img> */}