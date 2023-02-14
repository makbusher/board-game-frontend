import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import {HeartIcon, TagIcon} from '@primer/octicons-react';
import { ReviewsNew } from "./ReviewsNew";
import { StarRating } from "./StarRating";
import {Modal, Box} from '@mui/material';
import * as React from 'react';
import {Link} from 'react-router-dom';

export function GamesShowPage() {
  const [game, setGame] = useState({});
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getGame = () => {
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
    axios.post(`http://localhost:3000/games/${gameId}/favorites.json`).then((response) => {
      setFavorites([...favorites, response.data]);
      successCallback;
      window.location.href = "/favorites";
    });
  };

  const handleCreateReview = (params, successCallback) => {
    axios.post(`http://localhost:3000/games/${game.id}/reviews.json`, params).then((response) => {
      setReviews([...reviews, response.data]);
      successCallback();
      window.location.href = `/games/${game.id}`;
    });
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 720,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  useEffect(getGame, []);
  useEffect(getReview, []);

  return (
    <div id="games-show">
      <div key={game.id}>
        <div className="card mb-3" style={{width: '800px'}} >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={game.image_url} className="img-fluid rounded-start img-thumbnail pull-left" alt="..." width="300" height="300" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-text" align="left">{game.name}
                  <Link to={`https://www.amazon.com/s?k=${game.name}+boardgame`} target="_blank"><TagIcon size={24} /></Link>
                </h3>
                <p className="text-muted" align="left">{game.players} Players</p>
                <p className="card-text" align="left">{game.description}</p>
                <p className="card-text" align="left">Category: {game.category}</p>
                <AwesomeButton type="secondary" align="left" before={<HeartIcon />} onPress={() => handleCreateFavorite(game.id)}>Add to Favorites</AwesomeButton>
                <AwesomeButton type="secondary" align="left" onPress={handleOpen}>Leave a Review</AwesomeButton>
              </div>
            </div>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ReviewsNew onCreateReview={handleCreateReview}/>
          </Box>
        </Modal>
        <hr/>
        <h4> Reviews </h4>
        {reviews.map((review) => (
          <div key={review.id}>
            <StarRating value={review.rating} />
            <p>{review.description}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}


  