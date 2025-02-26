import { Link, useNavigate } from "react-router-dom";
import sidebarLinks from "../constant/sidebarLinks";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session and token
    localStorage.removeItem("userToken");
    sessionStorage.removeItem("userSession");

    // Redirect to login page after logout
    navigate("/login");
  };

  return (
    <div className="w-64 bg-gray-800 text-white min-h-11 p-6 m-5 rounded-2xl">
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
  );
};

export default Sidebar;
