import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const UserOrders = () => {
  const location = useLocation();
  const orders = location.state?.orders || [];

  return (
    <>
      <div className="flex">
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Your Orders</h1>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Order History</h2>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserOrders;
