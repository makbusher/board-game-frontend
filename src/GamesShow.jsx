import axios from "axios";
import { useState } from "react";

export function GamesShow(props) {
  const [favorites, setFavorites] = useState([]);

  const handleCreateFavorite = (gameId, successCallback) => {
    console.log("handlingCreateFavorite");
    axios.post(`http://localhost:3000/games/${gameId}/favorites.json`).then((response) => {
      setFavorites([...favorites, response.data]);
      successCallback;
    });
  };

  return (
    <div>
      <h1>About {props.game.name}</h1>
      <p>{props.game.id}</p>
      <p>Description: {props.game.description}</p>
      <p>Players: {props.game.players}</p>
      <p>Category: {props.game.category}</p>
      <button onClick={() => handleCreateFavorite(props.game.id)}>Add to Favorites</button>
    </div>
  );
}