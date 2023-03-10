import { Signup } from "./Signup";
import { LogoutLink } from "./LogoutLink";
import { FavoritesIndex } from "./FavoritesIndex";
import { GamesIndex } from "./GamesIndex";
import { GamesShowPage } from "./GamesShowPage";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";

export function Content() {
  const [favorites, setFavorites] = useState([]);
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState({});

  const handleIndexGames = () => {
    axios.get("http://localhost:3000/games.json").then((response) => {
      console.log(response.data);
      setGames(response.data);
    });
  };
  
  const handleIndexFavorites = () => {
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  const handleShowGame = (game) => {
    setCurrentGame(game);
  };

  useEffect(handleIndexFavorites, []);
  useEffect(handleIndexGames, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<GamesIndex games={games} onShowGame={handleShowGame}/>} />
        <Route path="/games" element={<GamesIndex games={games} onShowGame={handleShowGame}/>} />
        <Route path="/games/:id" element={<GamesShowPage game={currentGame} />}/>
        <Route path="/favorites" element={<FavoritesIndex favorites={favorites} />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
      </Routes>
    </div>
  );
}