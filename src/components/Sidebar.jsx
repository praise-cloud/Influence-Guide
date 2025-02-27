import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import sidebarLinks from "../constant/sidebarLinks";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // Clear user session and token
    localStorage.removeItem("userToken");
    sessionStorage.removeItem("userSession");

    // Redirect to login page after logout
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden flex items-center justify-between p-4 bg-gray-800 text-white">
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
        <h2 className="text-2xl font-bold">Navigation</h2>
      </div>
      <div
        className={`fixed inset-0 z-50 bg-gray-800 text-white p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-64 lg:flex-shrink-0 lg:p-6 lg:m-5 lg:rounded-2xl`}
      >
        <h2 className="text-2xl font-bold mb-4">Navigation</h2>
        <ul className="space-y-2">
          {sidebarLinks.map((link) => (
            <li key={link.name}>
              {link.name === "Logout" ? (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  to={link.href}
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
