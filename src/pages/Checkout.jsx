import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  const location = useLocation();
  const selectedServices = location.state?.selectedServices || [];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
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
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Payment Instructions</h2>
          <p className="text-lg text-gray-600">
            Please make a payment to the following account number:
          </p>
          <p className="text-xl font-bold text-gray-900 mt-2">
            Account Number: 1234567890
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Once the payment is made, please send the payment confirmation to
            our email: payments@yourcompany.com
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
