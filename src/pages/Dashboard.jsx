import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { homeServices } from "../constant/services";
import categories from "../constant/categories";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { state, dispatch } = useContext(AppContext);
  const [wishlistServices, setWishlistServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expandedService, setExpandedService] = useState(null);
  const navigate = useNavigate();

  const handleAddService = (service) => {
    if (!state.selectedServices.includes(service)) {
      dispatch({ type: "ADD_SERVICE", payload: service });
    }
  };

  const handleAddToWishlist = (service) => {
    if (!wishlistServices.includes(service)) {
      setWishlistServices((prevWishlistServices) => [
        ...prevWishlistServices,
        service,
      ]);
    }
  };

  const handleRemoveService = (service) => {
    dispatch({ type: "REMOVE_SERVICE", payload: service });
  };

  const handleRemoveFromWishlist = (service) => {
    setWishlistServices((prevWishlistServices) =>
      prevWishlistServices.filter((s) => s.title !== service.title)
    );
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { selectedServices: state.selectedServices } });
  };

  const handleWishlist = () => {
    navigate("/wishlist", { state: { wishlistServices } });
  };

  const filteredServices = homeServices.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? service.category === selectedCategory : true),
  );

  const calculateTotal = () => {
    return state.selectedServices.reduce((total, service) => {
      const rate = parseFloat(service.rate.split(" ")[0].substring(1));
      return total + rate;
    }, 0).toFixed(2);
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <div className="relative flex items-center space-x-4">
              <div className="relative">
                <FaShoppingCart className="text-3xl cursor-pointer" onClick={handleCheckout} />
                {state.selectedServices.length > 0 && (
                  <span className="absolute bottom-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 bg-indigo-600 rounded-full">
                    {state.selectedServices.length}
                  </span>
                )}
              </div>
              <div className="relative">
                <FaHeart
                  className="text-3xl text-red-600 cursor-pointer"
                  onClick={handleWishlist}
                />
                {wishlistServices.length > 0 && (
                  <span className="absolute bottom-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {wishlistServices.length}
                  </span>
                )}
              </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.title}
                className="bg-gray-100 rounded-lg shadow-lg p-6"
              >
                <h3
                  className="text-lg font-medium text-gray-900 cursor-pointer"
                  onClick={() =>
                    setExpandedService(
                      expandedService === service.title ? null : service.title,
                    )
                  }
                >
                  {service.title}
                </h3>
                {expandedService === service.title && (
                  <div className="mt-4">
                    <p className="text-base text-gray-600">
                      {service.description}
                    </p>
                    <div className="mt-4 flex justify-between">
                      <button
                        onClick={() => handleAddService(service)}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleAddToWishlist(service)}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        Add to Wishlist
                      </button>
                      <button
                        onClick={() => {
                          handleRemoveService(service);
                          handleRemoveFromWishlist(service);
                        }}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {state.selectedServices.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center mb-4">
                Selected Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {state.selectedServices.map((service) => (
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
                      Remove from Cart
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <h2 className="text-2xl font-bold mb-4">Total Amount</h2>
                <p className="text-lg font-medium text-gray-900">
                  {calculateTotal()} USD
                </p>
                <button
                  onClick={handleCheckout}
                  className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
