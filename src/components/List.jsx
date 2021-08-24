import React, { Component } from "react";
import PokeCard from "./PokeCard.jsx";
import "./list.css";
import axios from "axios";
import Searchbar from './Searchbar.jsx'

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

        const contagem = this.state.offset + this.state.limit;

        this.setState({ pokemon: pokes });
      });
  }
  more21(e) {
    if(this.state.offset >1079){
      this.setState({offset: 0})
    }else{
    const atualizar = this.state.offset + this.state.limit;
    this.setState({ offset: atualizar });
    console.log(atualizar, this.state.offset);
  }}

  less21(e) {
    if (this.state.offset <= 0) {
      this.setState({ offset: 1079 });
    } else {
      const atualizar = this.state.offset - this.state.limit;
      this.setState({ offset: atualizar });
    } //console.log(atualizar, this.state.offset);
  }
  
  
  search(e){
      console.log(e)
  }
  
  render() {
    return (
      <div className="list">
        <Searchbar>
          <input
        </Searchbar>
                
        {this.state.pokemon.map((poke, i) => {
          //console.log(poke);
          var limiteFinal = this.state.limit + this.state.offset;

          if (i < limiteFinal && i >= this.state.offset) {
            console.log(this.state.offset);
            return (
              <PokeCard key={i} url={poke.url} data={poke.name}></PokeCard>
            );
          } else {
          }
        })}
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
