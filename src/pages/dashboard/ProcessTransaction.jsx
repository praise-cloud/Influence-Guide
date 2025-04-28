import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/Footer";

const ProcessTransaction = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedGiftCard, amount, currency, exchangeRate } = location.state || {};

  const handleConfirmTransaction = () => {
    // Handle transaction confirmation logic here
    navigate("/checkout", {
      state: { selectedGiftCard, amount, currency, exchangeRate },
    });
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Process Transaction</h1>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-900">Gift Card: {selectedGiftCard.name}</h3>
            <p className="mt-4 text-base text-gray-600">Amount: {currency} {amount}</p>
            <p className="mt-4 text-base text-gray-600">Exchange Rate: {selectedGiftCard.rate}</p>
            <p className="mt-4 text-base text-gray-600">
              Total: {(amount * parseFloat(selectedGiftCard.rate.split(" ")[0].substring(1)) * exchangeRate).toFixed(2)} {currency}
            </p>
            <button
              onClick={handleConfirmTransaction}
              className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Confirm Transaction
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProcessTransaction;
