import {Routes, Route, BrowserRouter} from "react-router-dom";
import { AuthProvider } from "./src/services/useAuth.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import MenuItems from "./pages/MenuItems.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import Signin from "./pages/auth/signin.jsx";
import Signout from "./pages/auth/signout.jsx";
import Signup from "./pages/auth/signup.jsx";
import RestaurantChains from "./pages/restaurantChains/restaurantChains.jsx";
import Locations from "./pages/locations/locations.jsx";
import RequireAuth from "./components/RequireAuth.jsx";

const AppRoutes = () => {
  return (
      <>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/restaurantChains" element={
                  <RequireAuth>
                    <RestaurantChains />
                  </RequireAuth>
                } />

                <Route path="/restaurantChains/:chainId/locations" element={
                  <RequireAuth>
                    <Locations />
                  </RequireAuth>
                } />
                <Route path="/menu-items" element={<MenuItems />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signout" element={<Signout />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </>
  );
};
export default AppRoutes;
