import React, { Component } from "react";
import PokeCard from "./PokeCard.jsx";
import "./list.css";
//import axios from 'axios'

class List extends Component {
  constructor() {
    this.state = {
      url: "https://pokeapi.co/api/v2/pokemon/",
      pokemon: null
    };
  }

  render() {
    return <div className="list">{}</div>;
  }
}

export default List;
