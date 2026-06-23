import {Button} from 'react-bootstrap';
import {useState} from 'react';
import {useLocation, useNavigate, Link} from "react-router-dom";
import {useAuth} from "../../src/services/useAuth.jsx";
import "/src/assets/css/auth.css";

const Signin = () => {
    let location = useLocation();
    let navigate = useNavigate();
    let [account, setAccount] = useState(null);
    let from = location.state?.from?.pathname || "/";
    let {isAuthed, login, isLoading, error} = useAuth();

    // verify a user's username and password by calling the login function
    const verifyAccount = (e) => {
        e.preventDefault();
        login(account, () => {
            navigate(from, {replace: true});
        });
    }

    // handle the change event in the two text boxes
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setAccount({...account, [name]: value});
    }

    return (
        <div className="auth-container">
            {error && <div className="message alert alert-danger">{error}</div>}
            <div className="form-auth">
                <h3>Sign In</h3>
                <form onSubmit={verifyAccount}>
                    <div className="form-group">
                        <div>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-button">
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Signing in..." : "Sign In"}
                            </Button>
                        </div>
                        <div className="form-footer">
                            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;
