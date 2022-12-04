import "./App.css";
import { useState, useEffect } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);

  async function fetchId() {
    try {
      const id = Math.ceil(Math.random() * 150);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokeData = await response.json();
      console.log(pokeData);
      setPokemon(pokeData);
    } catch (err) {
      console.log(err);
    }
  }

  //on load, without this, when the page first loads, the DOM isn't manipulated.
  useEffect(() => {
    fetchId();
  }, []);

  return (
    <div>
      {pokemon ? (
        <>
          <img width={200} src={pokemon.sprites.front_default} alt="pkmn" />
          <h2>
            {" "}
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}{" "}
          </h2>{" "}
        </>
      ) : null}
      <button onClick={fetchId}> Get New Pokémon </button>{" "}
      {/* A button that changes the state without running the pokemon */}{" "}
    </div>
  );
};
export default Pokemon;
