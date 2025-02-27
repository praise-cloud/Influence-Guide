import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { AppContext } from "../context/AppContext";

const Wishlist = () => {
  const { state } = useContext(AppContext);
  const navigate = useNavigate();

  const handleRemoveFromWishlist = (service) => {
    // Implement remove from wishlist logic
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { selectedServices: state.selectedServices } });
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar className="flex-shrink-0 w-64" />
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Wishlist</h1>
            {state.wishlistServices && state.wishlistServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {state.wishlistServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-lg shadow-lg p-6"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      {service.description}
                    </p>
                    <button
                      onClick={() => handleRemoveFromWishlist(service)}
                      className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Remove from Wishlist
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-gray-600">Your wishlist is empty.</p>
            )}
            {state.selectedServices && state.selectedServices.length > 0 && (
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
      </div>
    </>
  );
};

export default Wishlist;
