import React, { Component } from "react";
import PokeCard from "./PokeCard.jsx";
import "./list.css";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 20,
      url: "https://pokeapi.co/api/v2/pokemon/?offset=00&limit=1080",
      pokemon: [],
      lista: []
    };
  }
  async componentDidMount() {
    const resp = await axios
      .get(this.state.url, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        const pokes = res.data.results;
        const listados = new Array(this.state.limit);

        const contagem = this.state.offset + this.state.limit;

        this.setState({ pokemon: pokes });
      });
  }

  more21(e) {
    console.log(e);
    var atualizar = this.state.offset + this.state.limit;
    this.setState({ offset: atualizar });
    console.log(this.state.offset);
  }

  render() {
    return (
      <div className="list">
        {this.state.pokemon.map((poke, i) => {
          //console.log(poke);
          
          if (i < this.state.limit && i >this.state) {
            
          } else {
            return (
              <PokeCard key={i} url={poke.url} data={poke.name}></PokeCard>
            );
          }
        })}
        <button
          className="btnMore"
          onClick={e => {
            this.more21(e);
          }}
        >
          {">>"}
        </button>
      </div>
    );
  }
}

export default List;
