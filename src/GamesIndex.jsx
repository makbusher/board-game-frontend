import { Link } from "react-router-dom";

export function GamesIndex(props) {
  return (
    <div id="games-index">
      <h1>Board Games</h1>
      {props.games.map((game) => (
        <div className="games" key={game.id}>
          <div className="card" style={{width: '19rem'}}>
            <img src={game.image_url} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <div className="card-text">
                <Link to={`/games/${game.id}`}>
                  <center>                        
                    {game.name}
                  </center>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

