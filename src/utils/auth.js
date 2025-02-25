export const login = (email, password) => {
  // Simulate login logic
  if (email === "user@example.com" && password === "password") {
    localStorage.setItem("userToken", "sampleToken123");
    return true;
  } else {
    return false;
  }
};

export const signUp = (name, email, password) => {
  // Simulate sign-up logic
  // In a real application, you would send a request to your backend to create a new user
  localStorage.setItem("userToken", "sampleToken123");
  return true;
};

export const logout = () => {
  // Clear user session and token
  localStorage.removeItem("userToken");
  sessionStorage.removeItem("userSession");
};
