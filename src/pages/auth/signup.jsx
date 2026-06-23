import {Button} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "/src/src/services/useAuth.jsx";
import "/src/assets/css/auth.css";

const Signup = () => {
    const [account, setAccount] = useState({role: 4}); // default role 4: basic user
    let {isAuthed, isLoading, error, isSignup, user, signup, login} = useAuth();
    let navigate = useNavigate();
    let from = '/';

    // create a user account by calling the signup function
    const createAccount = (e) => {
        e.preventDefault();
        signup(account);
    }

    // handle the change event in the text boxes
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setAccount({...account, [name]: value});
    }

    // The account has been created. Sign in now.
    useEffect(() => {
        if (user) {
            login(account, () => {
                navigate(from, {replace: true});
            });
        }
    }, [isSignup]);

    return (
        <div className="auth-container">
            {error && <div className="message alert alert-danger">{error}</div>}
            <div className="form-auth">
                <h3>Sign Up</h3>
                <form onSubmit={createAccount}>
                    <div className="form-group">

                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleInputChange}
                                required
                            />
                        </div>

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
                                {isLoading ? "Creating account..." : "Sign Up"}
                            </Button>
                        </div>
                        <div className="form-footer">
                            <p>Already have an account? <Link to="/signin">Sign In</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
