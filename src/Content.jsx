import { Signup } from "./Signup";
import { LogoutLink } from "./LogoutLink";
import { FavoritesIndex } from "./FavoritesIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [favorites, setFavorites] = useState([]);
  
  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  useEffect(handleIndexFavorites, []);

  return (
    <div>
      <Signup />
      <LogoutLink />
      <FavoritesIndex favorites={favorites} />
    </div>
  );
}