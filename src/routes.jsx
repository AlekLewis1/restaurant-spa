import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./services/useAuth";
import Home from "./pages/Home.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import Chains from "./pages/Chains.jsx";
import MenuItems from "./pages/MenuItems.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import Signin from "./pages/auth/signin.jsx";
import Signout from "./pages/auth/signout.jsx";
import Signup from "./pages/auth/signup.jsx";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/chains" element={<Chains />} />
        <Route path="/menu-items" element={<MenuItems />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}
