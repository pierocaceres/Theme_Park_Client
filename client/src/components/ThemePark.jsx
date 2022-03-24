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
}