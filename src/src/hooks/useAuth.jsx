import { useState, useEffect } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Load user and token from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Sign in - calls JWT login endpoint
  const signIn = async (username, password) => {
    const response = await fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.Status || "Login failed.");
    }

    localStorage.setItem("token", data.jwt);
    localStorage.setItem("user", JSON.stringify({ username }));
    setToken(data.jwt);
    setUser({ username });

    return data;
  };

  // Sign up - creates a new user account
  const signUp = async (username, password) => {
    const response = await fetch("http://localhost:8080/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.Status || "Sign up failed.");
    }

    return data;
  };

  // Sign out - clears token and user from state and localStorage
  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!token;

  return { user, token, isAuthenticated, signIn, signOut, signUp };
}
