import React, { Component } from "react";
import PokeCard from "./PokeCard.jsx";
import "./list.css";

class List extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/ability/",
    pokemon: null
  };
  componentDidMount() {
    
    
  }
  render() {
    return <div className="list">{card}</div>;
  }
}

export default List;
