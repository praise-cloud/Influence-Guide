import axios from "axios";

const API_URL = "https://your-backend-url.com/api/users"; // Replace with your backend URL

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem("userToken", response.data.token);
    return true;
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
};

export const signUp = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    localStorage.setItem("userToken", response.data.token);
    return true;
  } catch (error) {
    console.error("Sign-up error:", error);
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem("userToken");
};
