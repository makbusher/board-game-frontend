import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import {HeartIcon} from '@primer/octicons-react';
import { ReviewsNew } from "./ReviewsNew";

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

  const handleCreateReview = (params, successCallback) => {
    console.log("handlingCreateReview");
    axios.post(`http://localhost:3000/games/${game.id}/reviews.json`, params).then((response) => {
      setReviews([...reviews, response.data]);
      successCallback();
    });
  };

  useEffect(getGame, []);
  useEffect(getReview, []);

  return (
    <div id="games-show">
      <h3>{game.name}</h3>
      <small class="text-muted">{game.players} Players</small>
      <div class="card mb-3" style={{width: '800px'}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={game.image_url} class="img-fluid rounded-start" alt="..." width="300" height="300" className="img-thumbnail pull-left"/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text" align="left">{game.description}</p>
              <p class="card-text" align="left">Category: {game.category}</p>
              <AwesomeButton type="secondary" align="left" before={<HeartIcon />} onPress={() => handleCreateFavorite(game.id)}>Add to Favorites</AwesomeButton>
            </div>
          </div>
        </div>
      </div>
      <ReviewsNew onCreateReview={handleCreateReview}/>
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


  