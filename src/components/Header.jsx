import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const { user, isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/signin");
  };

  return (
    <header className="p-3 bg-dark text-white">
      <nav className="container d-flex gap-3 align-items-center">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/restaurants" className="text-white">Restaurants</Link>
        <Link to="/chains" className="text-white">Chains</Link>
        <Link to="/menu-items" className="text-white">Menu Items</Link>
        <div className="ms-auto d-flex gap-3 align-items-center">
          {isAuthenticated ? (
            <>
              <span className="text-white-50">Hello, {user?.username}</span>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="text-white">Sign In</Link>
              <Link to="/signup" className="text-white">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
