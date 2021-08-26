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

  async componentDidMount() {
    const resp = await axios
      .get(this.props.url, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        const img = res.data.sprites.front_default;
        //console.log(img);
        this.setState({ imageUrl: img });
        //console.log(this.state.imageUrl)
      });
  }
  render() {
    return (
      <div className="pokecard">
        <img src={this.state.imageUrl} />
        <h1 className="pokename">{this.props.pokename}</h1>
      </div>
    );
  }
}

export default PokeCard;
