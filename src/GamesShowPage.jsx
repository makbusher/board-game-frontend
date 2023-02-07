import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function GamesShowPage() {
  const [game, setGame] = useState({});
  const params = useParams();
  const [favorites, setFavorites] = useState([]);

  const getGame = () => {
    console.log(params.id);
    axios.get(`http://localhost:3000/games/${params.id}.json`).then((response) => {
      console.log(response.data);
      setGame(response.data);
    });
  };

  const handleCreateFavorite = (gameId, successCallback) => {
    console.log("handlingCreateFavorite");
    axios.post(`http://localhost:3000/games/${gameId}/favorites.json`).then((response) => {
      setFavorites([...favorites, response.data]);
      successCallback;
    });
  };

  useEffect(getGame, []);

  return (
    <div>
      <h1>About {game.name}</h1>
      <p>{game.id}</p>
      <p>Description: {game.description}</p>
      <p>Players: {game.players}</p>
      <p>Category: {game.category}</p>
      <button onClick={() => handleCreateFavorite(game.id)}>Add to Favorites</button>
    </div>
  );
}