import {useAuth} from "../../src/services/useAuth.jsx";
import {useEffect} from 'react';

const Signout = () => {
    const {logout} = useAuth();

    // need to wrap the setState call inside useEffect.
    useEffect(() => {
        logout();
    });

    return (
        <>
            <div className="main-heading">
                <div className="container">Have a good day!</div>
            </div>
            <div className="sub-heading">
                <div className="container">You have signed out.</div>
            </div>
            <div className="main-content container">
                Thank you for your visit.
            </div>
        </>
    );
};

export default Signout;
