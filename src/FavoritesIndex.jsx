import axios from "axios";
import { useState } from "react";

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
      {props.favorites.filter((favorite) => favorite.game.name.toLowerCase().includes(searchFilter.toLowerCase())).map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.game.name}</h2>            
          <img src={favorite.game.image_url} />
          <button onClick={() => handleDestroyFavorite(favorite)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
}
