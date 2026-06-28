import {settings} from "../../config/config";
import {useAuth} from "../../services/useAuth";
import useAxios from "../../services/useAxios";
import {NavLink} from "react-router-dom";

export default function Restaurants() {

  const {user} = useAuth();

  const url = settings.baseApiUrl + "/restaurants";

  const {
    data: restaurants,
    error,
    isLoading
  } = useAxios(url, "GET", { Authorization: "Bearer " + user.jwt });

  if (isLoading) return <div>Loading restaurants...</div>;
  if (error) return <div>Error loading restaurants.</div>;

  return (
    <>
      <h1>Restaurants</h1>

      <div className="main-content container">
        {restaurants && restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">

            <NavLink
              to={`/restaurants/${restaurant.id}`}
              className="restaurant-link"
            >
              {restaurant.name}
            </NavLink>

            <div>{restaurant.address}</div>

            <div>
              Chain: {restaurant.chain ? restaurant.chain.name : "Unknown"}
            </div>

          </div>
        ))}
      </div>
    </>
  );
}
