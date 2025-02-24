import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { homeServices } from "../constant/services";
import categories from "../constant/categories";
import { FaShoppingCart } from "react-icons/fa";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [expandedService, setExpandedService] = useState(null);
  const navigate = useNavigate();

  const handleAddService = (service) => {
    if (!selectedServices.includes(service)) {
      setSelectedServices((prevSelectedServices) => [
        ...prevSelectedServices,
        service,
      ]);
    }
  };

  const handleRemoveService = (service) => {
    setSelectedServices((prevSelectedServices) =>
      prevSelectedServices.filter((s) => s.title !== service.title)
    );
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { selectedServices } });
  };

  const filteredServices = homeServices.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? service.category === selectedCategory : true)
  );

  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
          <h2 className="text-2xl font-bold mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-4 rounded hover:bg-gray-700">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-4 rounded hover:bg-gray-700">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="block py-2 px-4 rounded hover:bg-gray-700">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-4 rounded hover:bg-gray-700">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/account" className="block py-2 px-4 rounded hover:bg-gray-700">
                Account
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {selectedServices.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {selectedServices.length}
                </span>
              )}
            </div>
          </div>
          <div className="flex space-x-4 mb-8">
            <div className="flex-1">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700"
              >
                Search Services
              </label>
              <input
                type="text"
                id="search"
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mt-1 block w-full h-14 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-5"
                placeholder="Search for a service..."
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Select a Category
              </label>
              <select
                id="category"
                name="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mt-1 block w-full h-14 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-5"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-lg p-6">
                <h3
                  className="text-lg font-medium text-gray-900 cursor-pointer"
                  onClick={() => setExpandedService(expandedService === service.title ? null : service.title)}
                >
                  {service.title}
                </h3>
                {expandedService === service.title && (
                  <div className="mt-4">
                    <p className="text-base text-gray-600">{service.description}</p>
                    <div className="mt-4 flex justify-between">
                      <button
                        onClick={() => handleAddService(service)}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Add to Cart
                      </button>
                      <button
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        Add to Wishlist
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {selectedServices.length > 0 && (
            <div className="mt-16 text-center">
              <button
                onClick={handleCheckout}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
