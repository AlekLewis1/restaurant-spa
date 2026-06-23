import {settings} from "../../config/config";
import {useState, useEffect} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import "../../assets/css/restaurantChains.css";
import useXMLHttp from "../../src/services/useXMLHttp.jsx"
import {useAuth} from "../../src/services/useAuth.jsx";

import React from 'react';

const RestaurantChains = () => {

    const {user} = useAuth();
    const {pathname} = useLocation();
    const [subHeading, setSubHeading] = useState("All Restaurant Chains");
    const url = settings.baseApiUrl + "/restaurant_chains";
    const {
        error,
        isLoading,
        data: restaurantChains,
    } = useXMLHttp(url, "GET", {Authorization:`Bearer ${user.jwt}`});


    useEffect(() => {
        setSubHeading("All Restaurant Chains");
    }, [pathname]);

    return (
        <div>
            <div>
                <div className="main-heading">
                    <div className="container">Restaurant Chains</div>
                </div>
                <div className="sub-heading">
                    <div className="container">{subHeading}</div>
                </div>

                <div className="main-content container">
                    {error && <div>{error}</div>}
                    {isLoading && <div className="image-loading">
                        Please wait while data is being loaded
                        <img src="/src/assets/img/loading.gif" alt="Loading ......"/>
                    </div>}

                    {restaurantChains && <div className="professor-container">
                        <div className="professor-list">
                            {restaurantChains.data.map((restaurantChains) => (
                                <NavLink key={restaurantChains.chain_id}
                                         className={({isActive}) => isActive ? "active" : ""}
                                         to={`/restaurantChains/${restaurantChains.chain_id}/locations`}>
                                    <span>&nbsp;</span><div>{restaurantChains.chain_name}</div>
                                </NavLink>
                            ))}
                        </div>
                        <div className="professor-item">
                            Restaurant Chain Details
                        </div>
                    </div>}

                </div>
            </div>
            
        </div>
    );
};

export default RestaurantChains;