import React, { Component } from "react";

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input className="busca" type="text"></input>
        <button className="btn-busca" type="submit">
          Procurar
        </button>
      </div>
    );
  }
}
