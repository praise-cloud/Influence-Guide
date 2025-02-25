import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import { AppProvider } from "./context/AppContext";
import "./components/LoadingScreen.css"; // Import the CSS file for the animation

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    const timer = setTimeout(handleComplete, 2000); // 2 seconds

    return () => {
      clearTimeout(timer);
      handleComplete();
    };
  }, [location]);

  const sidebarPages = [
    "/dashboard",
    "/wishlist",
    "/checkout",
    "/giftcard-exchange",
    "/support",
    "/settings",
    "/logout",
    "/process-transaction",
    "/order-tracking",
  ];

  const isSidebarPage = sidebarPages.includes(location.pathname);

  return (
    <AppProvider>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {!isSidebarPage && <Navbar />}
          <Layout />
        </>
      )}
    </AppProvider>
  );
};

export default App;
