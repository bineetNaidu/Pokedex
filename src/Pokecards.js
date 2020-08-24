import React, { Component } from 'react'
import "./Pokecards.css"




export default class Pokecards extends Component {
  render() {
    const imgUrl = (id) => `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

    let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

    const { id, name, type, exp } = this.props;
    
    return (
      <div className="Pokecard">
        <h3 className="Pokecard__title">{name}</h3>
        <div className="Pokecard__image">
          <img src={imgUrl(padToThree(id))} alt="pokemonLogo" />
        </div>
        <p className="Pokecard__data">Type: {type}</p>
        <p className="Pokecard__data">EXP: {exp}</p>
      </div>
    )
  }
}
