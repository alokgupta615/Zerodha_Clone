// src/utils/validations.js

// Signup validation
export const validateSignup = ({ name, email, password }) => {
  if (!name || !email || !password) {
    return "Name, email and password are required";
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Please enter a valid email address";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return null; // no error
};

// Login validation
export const validateLogin = ({ email, password }) => {
  if (!email || !password) {
    return "Email and password are required";
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Please enter a valid email address";
  }

  return null;
};
