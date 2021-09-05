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
    const resp = await axios.get(this.props.url, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    const img = resp.data.sprites.front_default;
    const name = resp.data.name;
    //console.log(img);
    this.setState({
      imageUrl: img,
      name
    });
    //console.log(this.state.imageUrl)
  }
  toUpper(string){
  return string.charAt(0).toUpperCase() + string.slice(1)

}
  render() {
    return (
      <div className="pokecard">
        <img src={this.state.imageUrl} />
        <h1 className="pokename">{ this.toUpper(this.props.pokename)}</h1>
      </div>
    );
  }
}

export default PokeCard;
