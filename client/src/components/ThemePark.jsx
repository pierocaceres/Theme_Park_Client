import React from 'react'

export default function ThemePark(props) {
    return (
        <ThemePark key ={ThemePark.id}> 
           <div className="card">
                 <div className="card game-card" onClick={props.onClick}> </div>
                 <img src = {props.image} />
                 <h1>{props.name}</h1>
                 <p>Description </p>
          </div>
        </ThemePark>
      )


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

