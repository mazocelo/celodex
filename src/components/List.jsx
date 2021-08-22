import React, { Component } from "react";
import PokeCard from "./PokeCard.jsx";
import "./list.css";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://pokeapi.co/api/v2/pokemon/", //https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
      pokemon: []
    };
  }
  async componentDidMount() {
    const resp = await axios.get(this.state.url).then(res => {
      const pokes = res.data.results;
      this.setState({ pokemon: pokes });
      console.log(this.state.pokemon);
    });
  }

  render() {
    var lista;

    if (this.state.pokemon) {
      lista = this.state.pokemon.forEach((poke, i) => {
        console.log(poke);
        return <PokeCard data={poke.names} />;
      });
    } else {
      lista = <PokeCard data={"oi"}></PokeCard>;
    }

    return (
      <div className="list">
        {this.state.pokemon.forEach((poke, i) => {
          console.log(poke.name);
          return <PokeCard id={i} key={i} data={poke.name} />;
        })}
      </div>
    );
  }
}

export default List;
