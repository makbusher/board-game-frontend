import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { Login } from "./Login";
import logo from './images/BGR-1.png';

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/" className="nav-link"><img src={logo} width="100em" height="60em" /></Link>
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

