import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-3 bg-dark text-white">
      <nav className="container d-flex gap-3">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/restaurants" className="text-white">Restaurants</Link>
        <Link to="/chains" className="text-white">Chains</Link>
        <Link to="/menu-items" className="text-white">Menu Items</Link>
      </nav>
    </header>
  );
}
