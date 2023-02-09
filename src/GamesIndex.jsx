import { Link } from "react-router-dom";
import { useState } from "react";

export function GamesIndex(props) {

  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="games-index">
      <center>
        <h1>Board Games</h1>
      Search: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="names" />
      </center>
      <datalist id="names">
        {props.games.map(game => (
          <option key={game.id} value={game.name} />
        ))}
      </datalist>
      {props.games.filter((game) => game.name.toLowerCase().includes(searchFilter.toLowerCase())).map((game) => (
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

