import React from 'react'
import img1 from "./img.jpg";


const Card = (props) => {
  
    return (
        <div className="wrapperDiv">
            
            <img src={props.src} alt={props.alt}/>
            <p>{props.desc}</p>
            <button>{props.value}</button>
          </div>
    )
}

export default Card
