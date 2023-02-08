import axios from "axios";
import { useState } from "react";

export function FavoritesIndex (props) {
  const [favorites, setFavorites] = useState([]);

  const handleDestroyFavorite = (favorite) => {
    console.log("handleDestroyFavorite", favorite);
    axios.delete(`http://localhost:3000/favorites/${favorite.id}.json`).then((response) => {
      setFavorites(favorites.filter((f) => f.id !== favorite.id));
    });
  };

  return (
    <div id="favorites-index">
      <h1>My Favorites</h1>
      {props.favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.game.name}</h2>            
          <img src={favorite.game.image_url} />
          <button onClick={() => handleDestroyFavorite(favorite)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
}