export function ReviewsNew(props) {
  const handleSubmit = (event) => {
    console.log(props.gameId);
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateReview(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Leave a Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Rating: <input name="rating" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}