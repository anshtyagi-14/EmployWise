import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      });
      localStorage.setItem("token", response.data.token);
      navigate("/users");
    } catch (err) {
      setError("Invalid credentials");
    }
};

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="text" className="form-control mb-3" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" className="form-control mb-3" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;