import React, { Component } from "react";
import PokeCard from "./PokeCard.jsx";
import "./list.css";
import axios from 'axios'

class List extends Component {
  constructor() {
    super()
    this.state = {
      url: "https://pokeapi.co/api/v2/pokemon/",
      pokemon: null
    };
  }
  async componentDidMount() {
    const resp = await axios.get(this.state.url)
    this.setState({pokemon: resp.data})
  }

  render() {
    return <div className="list"><PokeCard data = {this.state.pokemon}/></div>;
  }
}

export default List;
