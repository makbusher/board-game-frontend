export function GamesIndex(props) {
  return (
    <div id="games-index">
      <h1>Board Games</h1>
      {props.games.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <img src={game.image_url} />
          <button onClick={() => props.onShowGame(game)}>More Info</button>
        </div>
      ))}
    </div>
  );
}