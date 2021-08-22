import React from "react";
import './pokecard.css'
function PokeCard(props){
    
  
  return(
    <div className="pokecard">
     {props.data}
      </div> 
    )

}

export default PokeCard;