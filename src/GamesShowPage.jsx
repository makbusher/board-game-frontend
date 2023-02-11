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
      <div key={game.id}>
        <h3>{game.name}</h3>
        <small className="text-muted">{game.players} Players</small>
        <div className="card mb-3" style={{width: '800px'}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={game.image_url} className="img-fluid rounded-start img-thumbnail pull-left" alt="..." width="300" height="300" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text" align="left">{game.description}</p>
                <p className="card-text" align="left">Category: {game.category}</p>
                <AwesomeButton type="secondary" align="left" before={<HeartIcon />} onPress={() => handleCreateFavorite(game.id)}>Add to Favorites</AwesomeButton>
              </div>
            </div>
          </div>
        </div>
        <ReviewsNew onCreateReview={handleCreateReview}/>
        <h4> Reviews </h4>
        {reviews.map((review) => (
          <div key={review.id}>
            <p >Rating: {review.rating}</p>
            <p >Description: {review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


  