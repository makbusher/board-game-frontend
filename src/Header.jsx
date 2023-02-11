import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { Login } from "./Login";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="light">
      <div className="container-fluid">
        <a className="navbar-brand navbar-dark bg-dark" href="/">BGR</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav navbar-dark">
            <a className="nav-link active" aria-current="page" href="/">Games</a>
            <Link className="nav-link" to="/favorites">My Favorites</Link>
            <Link className="nav-link" to="/signup">Signup</Link>
            <Link className="nav-link" to="/logout">Logout</Link>
            <Link className="nav-link" to="/login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

