import React, { Component } from "react";
import "./pokecard.css";
class PokeCard extends Component() {
  constructor(props){
  super()
  this.state={
    name:'',
    imageUrl:'',
    pokeIndex:''
  }
    }
  render() {
    return <div className="pokecard"><h1>{this.props.data}</h1></div>;
  }
}

export default PokeCard;
