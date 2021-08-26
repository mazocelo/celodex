import React, { Component } from "react";
import PokeCard from "./PokeCard.jsx";
import "./list.css";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      find: "",
      searching: false,
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
        this.setState({ pokemon: pokes, lista: pokes });
      });
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
    const procurado = e.target.value;
    if (procurado.length > 0) {
      this.setState({ find: procurado }); //
      console.log(this.state.find);
    } 
  }
  //
  findNow() {
    this.state.pokemon.forEach((listado, i) => {
      if (listado.name == this.state.find) {
        //const novoArray = [listado];
        //console.log(listado);
       this.setState({ lista: [listado], searching: true });
        
      }
    });
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

        {this.state.lista.map((poke, i) => {
          var limiteFinal = this.state.limit + this.state.offset;
            
          if(this.state.  searching){
          console.log(poke);
          
            return(<PokeCard key={i} url={poke.url} pokename={poke.name}></PokeCard>
            )
          }
          
          else if (i < limiteFinal && i >= this.state.offset) {
            return (
              <PokeCard key={i} url={poke.url} pokename={poke.name}></PokeCard>
            );
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
