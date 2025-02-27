import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { AppContext } from "../context/AppContext";

const OrderTracking = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar className="flex-shrink-0 w-64" />
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">Order Tracking</h1>
            {state.orders && state.orders.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {state.orders.map((order, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      Order #{index + 1}
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      Total: {order.total} USD
                    </p>
                    <ul className="mt-4 space-y-2">
                      {order.services.map((service) => (
                        <li key={service.id} className="text-base text-gray-600">
                          {service.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-gray-600">No orders found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTracking;
