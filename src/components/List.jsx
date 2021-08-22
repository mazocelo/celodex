import React, { Component } from "react";
import PokeCard from "./PokeCard.jsx";
import "./list.css";
import axios from 'axios'

class List extends Component {
  constructor() {
    super()
    this.state = {
      url: "https://pokeapi.co/api/v2/pokemon/", //https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
      pokemon: null
    };
  }
  async componentDidMount() {
    const resp = await axios.get(this.state.url)
    .then((res)=>{
      console.log(res.data,this.state.pokemon)
      this.setState({pokemon: res.data.results})
    })
    }

  render() {
    return <div className="list"><PokeCard data = {this.state.pokemon.}/></div>;
  }
}

export default List;
