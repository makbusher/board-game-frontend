import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

export function GamesShowPage() {
  const [game, setGame] = useState({});
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const getGame = () => {
    console.log(params.id);
    axios.get(`http://localhost:3000/games/${params.id}.json`).then((response) => {
      console.log(response.data);
      setGame(response.data);
    });
  };

  const getReview = () => {
    axios.get(`http://localhost:3000/games/${params.id}/reviews.json`).then((response) => {
      console.log(response.data);
      setReviews(response.data);
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
  useEffect(getReview, []);

  return (
    <div>
      <h1>About {game.name}</h1>
      <p>Description: {game.description}</p>
      <p>Players: {game.players}</p>
      <p>Category: {game.category}</p>
      <AwesomeButton type="secondary" onClick={() => handleCreateFavorite(game.id)}>Add to Favorites</AwesomeButton>
      <hr />
      <h4> Reviews </h4>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Rating: {review.rating}</p>
          <p>Description: {review.description}</p>
        </div>
      ))}
    </div>
  );
}