import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import icon from "../assets/icon.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
  {/* LEFT */}
  <div className="navbar-left">
    <img src={icon} className="navbar-icon" />
    <img src={logo} className="navbar-logo" />
    <div className="navbar-tabs">
      <NavLink to="/" className="tab">Discover</NavLink>
      <NavLink to="/emergency" className="tab">Emergency</NavLink>
      <NavLink to="/my-listings" className="tab">My Listings</NavLink>
    </div>
  </div>

  {/* CENTER */}
  <div className="navbar-center">
    <input
      type="text"
      placeholder="Search dresses, party wear, ethnic..."
      className="navbar-search"
    />
  </div>

  {/* RIGHT */}
  <div className="navbar-right">
    <div className="bag-icon">👜</div>
    <img src="https://i.pravatar.cc/40" className="profile-avatar" />
  </div>
</nav>

  );
}

export default Navbar;
