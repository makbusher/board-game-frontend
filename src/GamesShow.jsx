export function GamesShow(props) {
  return (
    <div>
      <h1>About {props.game.name}</h1>
      <p>Description: {props.game.description}</p>
      <p>Players: {props.game.players}</p>
      <p>Category: {props.game.category}</p>
    </div>
  )
}