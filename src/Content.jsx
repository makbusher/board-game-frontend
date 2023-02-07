import { Signup } from "./Signup";
import { LogoutLink } from "./LogoutLink";
import { FavoritesIndex } from "./FavoritesIndex";
import { GamesIndex } from "./GamesIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [favorites, setFavorites] = useState([]);
  const [games, setGames] = useState([]);

  const handleIndexGames = () => {
    console.log("handleIndexGames");
    axios.get("http://localhost:3000/games.json").then((response) => {
      console.log(response.data);
      setGames(response.data);
    });
  };
  
  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  useEffect(handleIndexFavorites, []);
  useEffect(handleIndexGames, []);

  return (
    <div>
      <Signup />
      <LogoutLink />
      <GamesIndex games={games} />
      <FavoritesIndex favorites={favorites} />
    </div>
  );
}