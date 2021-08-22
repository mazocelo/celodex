import React, { Component } from "react";
import PokeCard from "./PokeCard.jsx";
import "./list.css";
import axios from "axios";
var lista;
class List extends Component {
  constructor() {
    super();
    this.state = {
      url: "https://pokeapi.co/api/v2/pokemon/", //https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
      pokemon: null
    };
  }
  async componentDidMount() {
    const resp = await axios.get(this.state.url).then(res => {
      var pokes = res.data.results;
      this.setState({ pokemon: pokes });
      console.log(this.state.pokemon);
      
    });
  }
  
  
  if(pokemon) {
    this.state.pokemon.forEach((i, poke) => {
      return <PokeCard data={poke} />;
    });
  }
  else
  
  render() {
    return <div className="list">{
        Lista
      }</div>;
  }
}

export default List;
