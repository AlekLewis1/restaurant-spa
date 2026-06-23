import {settings} from "../../config/config";
import useXMLHttp from "../../src/services/useXMLHttp.jsx";
import {useParams} from "react-router-dom";
import {useAuth} from "../../src/services/useAuth.jsx";

const Locations = () => {

    const {user} = useAuth();

    const {chainId} = useParams();

    const url =
        settings.baseApiUrl +
        "/restaurant_chains/" +
        chainId +
        "/locations";

    const {
        error,
        isLoading,
        data: locations
    } = useXMLHttp(url, "GET", {Authorization:`Bearer ${user.jwt}`});


    return (
        <>
            {error && <div>{error}</div>}

            {isLoading && (
                <div>
                    Please wait while data is being loaded...
                </div>
            )}

            {locations && (
                <div>
                    <h2>{locations.chain_name}</h2>

                    {locations.locations.map((location) => (
                        <div key={location.location_id}>
                            <p>{location.street_address}</p>
                            <p>
                                {location.city}, {location.state} {location.zip_code}
                            </p>
                            <p>{location.phone}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </>
    );

};

export default Locations;