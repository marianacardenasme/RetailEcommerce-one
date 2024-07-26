import './Login.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container className="auth-container">
      <form onSubmit={handleSubmit}>
        <h3 className="auth-title">Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="text-right">
          Forgot password? <a href="/reset">Reset</a>
        </p>
        <p className="forgot-password text-right">
          New user <a href="/register">Register Here</a>
        </p>
      </form>

    </Container>
  );
}

export default Login;