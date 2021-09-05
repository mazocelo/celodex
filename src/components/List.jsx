import React, { Component } from "react";
import PokeCard from "./PokeCard.jsx";
import "./list.css";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      found: "",
      looking: "",
      searching: false,
      offset: 0,
      limit: 21,
      url: "https://pokeapi.co/api/v2/pokemon/?offset=00&limit=1080",
      pokemon: [],
      lista: []
    };
  }
  async componentDidMount() {
    const resp = await axios.get(this.state.url, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const pokes = resp.data.results;
    const listados = new Array(this.state.limit);

    //const contagem = this.state.offset + this.state.limit;
    this.setState({ pokemon: pokes });
  }
  more21(e) {
    if (this.state.offset > 1079) {
      this.setState({ offset: 0 });
    } else {
      const atualizar = this.state.offset + this.state.limit;
      this.setState({ offset: atualizar });
      console.log(atualizar, this.state.offset);
    }
  }

  less21(e) {
    if (this.state.offset <= 0) {
      this.setState({ offset: 1079 });
    } else {
      const atualizar = this.state.offset - this.state.limit;
      this.setState({ offset: atualizar });
    } //console.log(atualizar, this.state.offset);
  }

  search(e) {
    var procurado = e.target.value;
    procurado = procurado.toLowerCase();
    // if (procurado.length > 0) {
    this.setState({ looking: procurado }); //
    console.log(procurado);
    //}
  }
  //
  findNow(e) {
    e.preventDefault();
    const procurado = this.state.pokemon.find(
      el => el.name == this.state.looking
    );
    console.log(procurado);
    if (procurado) this.setState({ searching: true, found: procurado });
  }
  renderList() {
    var lista = null;

    if (this.state.searching == true) {
      var procurado = this.state.found;
      console.log(procurado.url);
      lista = (
        <PokeCard
          key={procurado.url}
          url={procurado.url}
          pokename={procurado.name}
        ></PokeCard>
      );
    } else {
      lista = this.state.pokemon.map((poke, i) => {
        var limiteFinal = this.state.limit + this.state.offset;
        if (i < limiteFinal && i >= this.state.offset) {
          return (
            <PokeCard key={i} url={poke.url} pokename={poke.name}></PokeCard>
          );
        }
      });
    }
    return lista;
  }
  render() {
    return (
      <div className="list">
        <div>
          <input
            onChange={e => {
              this.search(e);
            }}
          ></input>
          <button
            onClick={e => {
              this.findNow(e);
            }}
          >
            {" "}
            Procurar
          </button>
        </div>
        {this.renderList()}
        <button
          className="btnP"
          onClick={e => {
            this.less21(e);
          }}
        >
          {"<<"}
        </button>
        <button
          className="btnP"
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
