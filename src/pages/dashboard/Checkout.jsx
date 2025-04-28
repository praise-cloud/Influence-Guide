import { useContext } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { AppContext } from "../../context/AppContext";

const Checkout = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleRemoveFromCart = (service) => {
    dispatch({ type: "REMOVE_SERVICE", payload: service });
  };

  const handlePlaceOrder = () => {
    // Handle order placement logic here
    const newOrder = {
      services: state.selectedServices,
      total: calculateTotal(),
    };
    dispatch({ type: "ADD_ORDER", payload: newOrder });
    dispatch({ type: "REMOVE_SERVICE", payload: [] });
    // Navigate to order tracking or confirmation page
  };

  const calculateTotal = () => {
    return state.selectedServices.reduce((total, service) => {
      const rate = parseFloat(service.rate.split(" ")[1].replace(/,/g, ''));
      return total + rate;
    }, 0).toFixed(2);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar className="flex-shrink-0 w-64" />
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
            {state.selectedServices && state.selectedServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {state.selectedServices.map((service) => (
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
                      onClick={() => handleRemoveFromCart(service)}
                      className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Remove from Cart
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-gray-600">Your cart is empty.</p>
            )}
            {state.selectedServices && state.selectedServices.length > 0 && (
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-4">Total Amount</h2>
                <p className="text-lg font-medium text-gray-900">
                  {calculateTotal()} USD
                </p>
                <button
                  onClick={handlePlaceOrder}
                  className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Place Order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
