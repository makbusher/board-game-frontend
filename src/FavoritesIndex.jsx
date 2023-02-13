import axios from "axios";
import { useState } from "react";
import { TrashIcon } from '@primer/octicons-react';
import 'react-awesome-button/dist/styles.css';
import { AwesomeButton } from 'react-awesome-button';
import {Card, CardMedia, CardContent, Typography, CardActions, CardActionArea, Grid, Container} from '@mui/material';
import { Link } from 'react-router-dom';

export function FavoritesIndex (props) {
  const [favorites, setFavorites] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const handleDestroyFavorite = (favorite) => {
    console.log("handleDestroyFavorite", favorite);
    axios.delete(`http://localhost:3000/favorites/${favorite.id}.json`).then((response) => {
      setFavorites(favorites.filter((f) => f.id !== favorite.id));
    });
  };

  return (
    <div id="favorites-index">
      <center>
        <h1>My Favorites</h1>
      Search: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="names" />
      </center>
      <datalist id="names">
        {props.favorites.map(favorite => (
          <option key={favorite.id} value={favorite.game.name} />
        ))}
      </datalist>
      <Container>
        {props.favorites.filter((favorite) => favorite.game.name.toLowerCase().includes(searchFilter.toLowerCase())).map((favorite) => (
          <div key={favorite.id}>
            <Card sx={{ maxWidth: 320 }}>
              <CardActionArea>
                <div style={{display: 'flex', justifyContent:'center'}}>
                  <Link to={`/games/${favorite.game.id}`}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={favorite.game.image_url}
                    />
                  </Link>
                </div>
                <div style={{display: 'flex', justifyContent:'center'}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {favorite.game.name}
                    </Typography>
                  </CardContent>
                </div>
              </CardActionArea>
              <CardActions>
                <AwesomeButton type="danger" before={<TrashIcon />} onPress={() => handleDestroyFavorite(favorite)}>Remove</AwesomeButton>
              </CardActions>
            </Card>
          </div>
        ))}
      </Container>
    </div>
  );
}

