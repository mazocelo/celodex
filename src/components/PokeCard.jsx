import React, { Component } from "react";
import "./pokecard.css";
class PokeCard extends Component{
  constructor(props){
  super(props)
  this.state={
    name:'',
    imageUrl:'',
    pokeIndex:''
  }
    }
  render() {
    return <div className="pokecard">
      <img src= {this.props.url+''}/>        
      <h1>{this.props.data}</h1>
              
    </div>;
  }
}

export default PokeCard;
