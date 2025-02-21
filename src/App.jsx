import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";
import "./components/LoadingScreen.css"; // Import the CSS file for the animation

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    const timer = setTimeout(handleComplete, 3000); // 3 seconds

    return () => {
      clearTimeout(timer);
      handleComplete();
    };
  }, [location]);

  return <>{loading ? <LoadingScreen /> : <Layout />}</>;
};

export default App;
