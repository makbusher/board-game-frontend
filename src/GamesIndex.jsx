import { Link } from "react-router-dom";

export function GamesIndex(props) {
  return (
    <div id="games-index">
      <h1>Board Games</h1>
      {props.games.map((game) => (
        <div key={game.id}>
          <Link to={`/games/${game.id}`}>
            <h2>{game.name}</h2>
          </Link>
          <img src={game.image_url} />
        </div>
      ))}
    </div>
  );
}