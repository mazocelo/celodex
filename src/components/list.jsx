import React, {Component} from 'react'
import PokeCard from './PokeCard.jsx'
import './list.css'

class List extends Component
{
  render(){
  return(
    <div>
    <PokeCard/>
    <PokeCard/>
    <PokeCard/>
    <PokeCard/>  
 </div>
      )
  }
}

export default List;