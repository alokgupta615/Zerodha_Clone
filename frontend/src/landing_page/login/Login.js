import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  handleError,
  handleSuccess,
} from "../../landing_page/util/notifications";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("Email and password are required");
    }

    try {
      const url = `https://deploy-mern-app-1-api.vercel.app/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => navigate("/home"), 1000);
      } else if (error) {
        handleError(error?.details?.[0]?.message || "Something went wrong");
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "28rem" }}>
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={loginInfo.email}
              className="form-control"
              autoFocus
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={loginInfo.password}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <p className="text-center mt-3 mb-0">
            Don't have an account?{" "}
            <Link to="/signup" className="fw-semibold text-decoration-none">
              Signup
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
