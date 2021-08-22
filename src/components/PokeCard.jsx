import React, { Component } from "react";
import "./pokecard.css";

import axios from "axios";

class PokeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      pokeIndex: ""
    };
  }

  async componetDidMount() {
    const resp = await axios.get(this.props.url)
    .then(res=>{
      console.log(res.data)
    })
    
  }
  render() {
    return (
      <div className="pokecard">
        <img />
        <h1>{this.props.data}</h1>
      </div>
    );
  }
}

export default PokeCard;
