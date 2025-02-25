import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";

const Checkout = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedGiftCard, amount, currency, exchangeRate } = state;
  const location = useLocation();
  const navigate = useNavigate();
  const [proofOfPayment, setProofOfPayment] = useState(null);
  const [orders, setOrders] = useState(location.state?.orders || []);

  const handleFileChange = (e) => {
    setProofOfPayment(e.target.files[0]);
  };

  const handlePlaceOrder = () => {
    // Handle order placement logic here
    // Update user's order information
    const newOrder = {
      selectedGiftCard,
      amount,
      currency,
      exchangeRate,
      total: (amount * parseFloat(selectedGiftCard.rate.split(" ")[0].substring(1)) * exchangeRate).toFixed(2),
    };
    setOrders([...orders, newOrder]);
    dispatch({ type: "SET_SELECTED_GIFT_CARD", payload: null });
    dispatch({ type: "SET_AMOUNT", payload: "" });
    dispatch({ type: "SET_CURRENCY", payload: "USD" });
    navigate("/user-orders", { state: { orders: [...orders, newOrder] } });
  };

  const calculateTotal = () => {
    return orders.reduce((total, order) => total + parseFloat(order.total), 0).toFixed(2);
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
            <ul className="space-y-4">
              {orders.map((order, index) => (
                <li key={index} className="bg-gray-100 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Gift Card: {order.selectedGiftCard.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    Amount: {order.currency} {order.amount}
                  </p>
                  <p className="mt-2 text-base text-gray-600">
                    Exchange Rate: {order.selectedGiftCard.rate}
                  </p>
                  <p className="mt-2 text-base text-gray-600">
                    Total: {order.total} {order.currency}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Total Amount</h2>
              <p className="text-lg font-medium text-gray-900">
                {calculateTotal()} {currency}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Proof of Payment</h2>
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
            />
            <button
              onClick={handlePlaceOrder}
              className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
