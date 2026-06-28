/*
Description: Amenities page that displays all amenities with pagination, sorting, and searching
*/

import {settings} from "../../config/config";
import {useAuth} from "../../services/useAuth";
import useAxios from "../../services/useAxios";
import {useState} from "react";
import Pagination from "./pagination";

const Amenities = () => {

    const [url, setUrl] = useState(settings.baseApiUrl + "/amenities");
    const [subHeading, setSubHeading] = useState("All Amenities");
    const {user} = useAuth();

    const {
        error,
        isLoading,
        data: amenities
    } = useAxios(url, "GET", {Authorization: "Bearer " + user.jwt});

    const handleSearch = (e) => {
        e.preventDefault();
        const term = document.getElementById("amenity-search-term").value;
        if(term == '')
            setSubHeading("All Amenities");
        else
            setSubHeading("Amenities containing '" + term + "'");
        setUrl(settings.baseApiUrl + "/amenities/search?q=" + term);
    }

    const clearSearchBox = (e) => {
        e.preventDefault();
        document.getElementById("amenity-search-term").value = "";
        setSubHeading("All Amenities");
        setUrl(settings.baseApiUrl + "/amenities");
    }

    return (
        <>
            <div className="main-heading">
                <div className="container">Restaurant API</div>
            </div>
            <div className="sub-heading">
                <div className="container">{subHeading}</div>
            </div>
            <div className="main-content container">
                <form style={{textAlign: "right", marginBottom: "3px"}} onSubmit={handleSearch}>
                    <input id="amenity-search-term" placeholder="Enter search terms"/>
                    <button type="submit" className="button-light" style={{marginLeft: "5px"}}>Search</button>
                    <button className="button-light" style={{marginLeft: "5px"}} onClick={clearSearchBox}>Clear</button>
                </form>

                {isLoading && <p>Loading...</p>}
                {error && <p>Error loading amenities.</p>}

                {amenities && amenities.data && amenities.data.map((amenity) => (
                    <div key={amenity.amenity_id} className="card mb-2 p-3">
                        <h5>{amenity.amenity_name}</h5>
                        <p>{amenity.description}</p>
                        <small>Icon: {amenity.icon_name}</small>
                    </div>
                ))}

                {amenities && !amenities.data && Array.isArray(amenities) && amenities.map((amenity) => (
                    <div key={amenity.amenity_id} className="card mb-2 p-3">
                        <h5>{amenity.amenity_name}</h5>
                        <p>{amenity.description}</p>
                        <small>Icon: {amenity.icon_name}</small>
                    </div>
                ))}

                {amenities && amenities.data && <Pagination amenities={amenities} setUrl={setUrl}/>}
            </div>
        </>
    );
};

export default Amenities;
