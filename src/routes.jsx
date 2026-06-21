import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import Chains from "./pages/Chains.jsx";
import MenuItems from "./pages/MenuItems.jsx";
import NoMatch from "./pages/NoMatch.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/chains" element={<Chains />} />
      <Route path="/menu-items" element={<MenuItems />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
