import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import Chains from "./pages/Chains.jsx";
import MenuItems from "./pages/MenuItems.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/restaurants"
        element={
          <ProtectedRoute>
            <Restaurants />
          </ProtectedRoute>
        }
      />
      <Route
        path="/chains"
        element={
          <ProtectedRoute>
            <Chains />
          </ProtectedRoute>
        }
      />
      <Route
        path="/menu-items"
        element={
          <ProtectedRoute>
            <MenuItems />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
