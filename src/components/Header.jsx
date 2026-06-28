import { NavLink } from "react-router-dom";
import { useAuth } from "../src/services/useAuth.jsx";
import {Navbar, Nav, Container} from "react-bootstrap";

const Header = () => {
  const {isAuthed, user} = useAuth();
  const className = ({ isActive }) =>
    isActive ? "text-white fw-bold" : "text-white";
  return (
    <header className="p-3 bg-dark text-white">
      <nav className="container d-flex gap-3 align-items-center">
        <NavLink to="/" className={className}>Home</NavLink>
        <NavLink to="/restaurantChains" className={className}>Restaurant Chains</NavLink>
        <NavLink to="/amenities" className={className}>Amenities</NavLink>
        <div className="ms-auto d-flex gap-3 align-items-center">
          {isAuthed
            ? <NavLink to="/signout" className={className}>Sign Out</NavLink>
            : <NavLink to="/signin" className={className}>Sign In / Sign Up</NavLink>
          }
        </div>
      </nav>
      {isAuthed && user ? (
        <div className="container text-end text-white-50">Welcome {user.name}!</div>
      ) : ""}
    </header>
  );
};
export default Header;
