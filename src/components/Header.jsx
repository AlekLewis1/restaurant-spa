import { NavLink } from "react-router-dom";
import { useAuth } from "../services/useAuth";

export default function Header() {
  const { isAuthed, user } = useAuth();

  const className = ({ isActive }) =>
    isActive ? "text-white fw-bold" : "text-white";

  return (
    <header className="p-3 bg-dark text-white">
      <nav className="container d-flex gap-3 align-items-center">
        <NavLink to="/" className={className}>Home</NavLink>
        <NavLink to="/restaurants" className={className}>Restaurants</NavLink>
        <NavLink to="/chains" className={className}>Chains</NavLink>
        <NavLink to="/menu-items" className={className}>Menu Items</NavLink>
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
}
