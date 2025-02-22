import { useState } from "react";
import { Link } from "react-router-dom";
import { homeServices } from "../constant/services";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddService = () => {
    const service = homeServices.find((s) => s.title === selectedService);
    if (service && !selectedServices.includes(service)) {
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
    // Navigate to the checkout page with the selected services
    // This can be done using a router or any state management solution
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
          <h1 className="text-4xl font-bold text-center mb-8">Dashboard</h1>
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
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
              </select>
            </div>
          </div>
          <div className="mb-8">
            <label
              htmlFor="services"
              className="block text-sm font-medium text-gray-700"
            >
              Select a Service
            </label>
            <select
              id="services"
              name="services"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="mt-1 block w-full h-14 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-5"
            >
              <option value="">Select a service</option>
              {filteredServices.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddService}
              className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to List
            </button>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-4">
              Selected Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedServices.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    {service.description}
                  </p>
                  <button
                    onClick={() => handleRemoveService(service)}
                    className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            {selectedServices.length > 0 && (
              <div className="mt-10 text-center">
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
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
