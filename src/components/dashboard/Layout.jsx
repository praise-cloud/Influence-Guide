import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = () => {
  const location = useLocation();
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
    <div className="flex flex-col min-h-screen">
      {!isSidebarPage && <Navbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
