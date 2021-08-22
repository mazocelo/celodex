import React, { Component } from "react";
import PokeCard from "./PokeCard.jsx";
import "./list.css";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21", //https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
      pokemon: []
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
       
        this.setState({ pokemon: pokes });
       
        console.log(this.state.pokemon);
      });
  }

  more21(e){
    console.log(e)
  }
  
  
  render() {
    return (
      <div className="list">
        {this.state.pokemon.map((poke, i) => {
          console.log(poke);
          return <PokeCard key={i} url={poke.url} data={poke.name}></PokeCard>;
        })}
         <button className="btnMore" onClick = {(e)=>{this.emore21()}}> {'>>'}</button>
      </div>
    );
  }
}

export default List;
