import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <h1>Signup</h1>
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group">
                <label>Password Confirmation</label>
                <input 
                  type="password"
                  name="password_confirmation"
                  className="form-control"
                  placeholder="Re-enter password"
                />
              </div>
              <button type="submit" className="btn btn-dark">Signup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}