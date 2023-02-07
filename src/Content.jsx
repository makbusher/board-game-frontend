import { Signup } from "./Signup";
import { LogoutLink } from "./LogoutLink";
import { FavoritesIndex } from "./FavoritesIndex";
import { GamesIndex } from "./GamesIndex";
import { GamesShow } from "./GamesShow";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function Content() {
  const [favorites, setFavorites] = useState([]);
  const [games, setGames] = useState([]);
  const [isGamesShowVisible, setIsGamesShowVisible] = useState(false);
  const [currentGame, setCurrentGame] = useState({});

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

  const handleShowGame = (game) => {
    console.log("handleShowGame", game);
    setIsGamesShowVisible(true);
    setCurrentGame(game);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsGamesShowVisible(false);
  };

  useEffect(handleIndexFavorites, []);
  useEffect(handleIndexGames, []);

  return (
    <div>
      <Signup />
      <LogoutLink />
      <GamesIndex games={games} onShowGame={handleShowGame}/>
      <FavoritesIndex favorites={favorites} />
      <Modal show={isGamesShowVisible} onClose={handleClose}>
        <GamesShow game={currentGame} />
      </Modal>
    </div>
  );
}