import { AwesomeButton } from 'react-awesome-button';

export function ReviewsNew(props) {
  const handleSubmit = (event) => {
    console.log(props.gameId);
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateReview(params, () => event.target.reset());
  };

  return (
    <div id="review-form">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <h3>Leave a Review</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Rating</label>
                <input 
                  type="text"
                  name="rating"
                  className="form-control"
                  placeholder="Enter 1-5"
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  placeholder="Description"
                />
              </div>
              <AwesomeButton type="secondary" onPress={() => handleSubmit}>Submit</AwesomeButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

