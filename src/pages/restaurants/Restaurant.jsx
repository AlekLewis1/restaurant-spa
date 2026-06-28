import {settings} from "../../config/config";
import {useAuth} from "../../services/useAuth";
import useAxios from "../../services/useAxios";
import {useParams, useNavigate} from "react-router-dom";

export default function Restaurant() {

  const {restaurantId} = useParams();
  const {user} = useAuth();
  const navigate = useNavigate();

  const url = settings.baseApiUrl + "/restaurants/" + restaurantId;

  const {
    data: restaurant,
    error,
    isLoading
  } = useAxios(url, "GET", { Authorization: "Bearer " + user.jwt });

  if (isLoading) return <div>Loading restaurant...</div>;
  if (error) return <div>Error loading restaurant.</div>;

  const handleBack = () => {
    navigate("/restaurants");
  };

  return (
    <>
      <h1>{restaurant.name}</h1>

      <div className="main-content container">

        <div><strong>Address:</strong> {restaurant.address}</div>

        <div>
          <strong>Chain:</strong>{" "}
          {restaurant.chain ? restaurant.chain.name : "Unknown"}
        </div>

        {restaurant.chain && (
          <div>
            <strong>Chain Description:</strong> {restaurant.chain.description}</div>
        )}

        <button className="button-light" onClick={handleBack}>
          Back to Restaurants
        </button>

      </div>
    </>
  );
}
