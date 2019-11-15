import React from 'react';
import './Card.css'

const Card=({id, name , mail, phone})=>{
    
    return(
        <div className="dib bg-light-green pa3 br3 ma2 grow bw2 shadow-5 ">
            <img  alt={`robofriend${id}`} src={`https://robohash.org/${name}`}/>
            
        
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <p>{mail}</p>
            <p>{phone}</p>
        </div>
        </div>
    );
        
}
export default Card;