// import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const orders = [
  { title: "Content Scheduling", price: 50 },
  { title: "Post Automation", price: 75 },
  { title: "Engagement Tracking", price: 100 },
];

const Checkout = () => {
  const total = orders.reduce((sum, order) => sum + order.price, 0);

  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mt-20">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Orders
          </h1>
          <div className="mt-8">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600">
                    Service
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-right text-md font-semibold text-gray-600">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td className="py-4 px-4 border-b border-gray-200 text-sm text-gray-900">
                      {order.title}
                    </td>
                    <td className="py-4 px-4 border-b border-gray-200 text-right text-sm text-gray-900">
                      ${order.price}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="py-2 px-4 border-t border-gray-200 text-md font-semibold text-gray-900">
                    Total
                  </td>
                  <td className="py-2 px-4 border-t border-gray-200 text-right text-md font-semibold text-gray-900">
                    ${total}
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="mt-8 flex justify-end">
              <button className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;