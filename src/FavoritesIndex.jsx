export function FavoritesIndex (props) {
  return (
    <div id="favorites-index">
      <h1>My Favorites</h1>
      {props.favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.name}</h2>
          <img src={favorite.image_url} />
        </div>
      ))}
    </div>
  );
}