import React, { Component } from "react";
import PokeCard from "./PokeCard.jsx";
import "./list.css";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 21,
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
        this.setState();

        this.setState({ pokemon: pokes });
        console.log(pokes);
        var novaLista = [];
        const contagem = this.state.offset + this.state.limit;
        for (let i = this.state.offset; i >= contagem; i++) {
          novaLista.push(this.state.pokemon[i]);
        }
        console.log(novaLista);
        this.setState({ lista: novaLista });
        //console.log(this.state.pokemon);
      });
  }

  setLista() {}
  more21(e) {
    console.log(e);
    var atualizar = this.state.offset + this.state.limit;
    this.setState({ offset: atualizar });
    console.log(this.state.offset);
  }

  render() {
    return (
      <div className="list">
        {this.state.lista.map((poke, i) => {
          console.log(poke);
          return <PokeCard key={i} url={poke.url} data={poke.name}></PokeCard>;
        })}
        <button
          className="btnMore"
          onClick={e => {
            this.emore21(e);
          }}
        >
          {">>"}
        </button>
      </div>
    );
  }
}

export default List;
