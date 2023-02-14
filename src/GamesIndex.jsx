import { Link } from "react-router-dom";
import { useState } from "react";
import {ImageList, ImageListItem} from '@mui/material';

export function GamesIndex(props) {

  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="games-index">
      <center>
      Search: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="names" />
      </center>
      <datalist id="names">
        {props.games.map(game => (
          <option key={game.id} value={game.name} />
        ))}
      </datalist>
      <center>
        <ImageList sx={{ width: 1000, height: 800 }} cols={3} rowHeight={164}>
          {props.games.filter((game) => game.name.toLowerCase().includes(searchFilter.toLowerCase())).map((game) => (
            <ImageListItem key={game.image_url}>
              <Link to={`/games/${game.id}`}>
                <img
                  src={`${game.image_url}?w=164&h=164&fit=crop&auto=format`}
                  alt={game.name}
                  loading="lazy"
                />
              </Link>
            </ImageListItem>
          ))}
        </ImageList>
      </center>
    </div>
  );
}