import React, {Component} from 'react'
import PokeCard from './PokeCard.jsx'
import './list.css'

class List extends Component
{
  render(){
    var card =[]
    for(let  i = 0; i < 1000; i++){
        card.push(<PokeCard/>)
      }
  return(

    
    <div className='list'>
    {      card   }
        
 </div>
      )
  }
}

export default List;