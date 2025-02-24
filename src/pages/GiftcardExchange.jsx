import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import giftCardList from "../constant/giftCardList";
import currencyList from "../constant/currencyList";
import Footer from "../components/Footer";

const GiftcardExchange = () => {
  const [selectedGiftCard, setSelectedGiftCard] = useState(null);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const navigate = useNavigate();

  const handleSelectGiftCard = (giftCard) => {
    setSelectedGiftCard(giftCard);
    setAmount("");
    setCurrency("USD");
  };

  const handleExchange = () => {
    // Handle gift card exchange logic here
    navigate("/process-transaction", {
      state: { selectedGiftCard, amount, currency },
    });
  };

  const calculateTotal = () => {
    if (!selectedGiftCard || !amount) return 0;
    const rate = parseFloat(selectedGiftCard.rate.split(" ")[0].substring(1));
    return (amount * rate).toFixed(2);
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Giftcard Exchange
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {giftCardList.map((giftCard) => (
              <div
                key={giftCard.name}
                className="bg-white rounded-lg shadow-lg p-6 cursor-pointer"
                onClick={() => handleSelectGiftCard(giftCard)}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {giftCard.name}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Exchange Rate: {giftCard.rate}
                </p>
                {selectedGiftCard === giftCard && (
                  <div className="mt-4">
                    <label
                      htmlFor="currency"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Select Currency
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="mt-1 block w-full h-14 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-5"
                    >
                      {currencyList.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                    <div className="mt-4">
                      <label
                        htmlFor="amount"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Amount to Exchange
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mt-1 block w-full h-14 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-5"
                        placeholder="Enter amount"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Total: {calculateTotal()} {currency}
                      </h3>
                    </div>
                    <button
                      onClick={handleExchange}
                      className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Process Transaction
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GiftcardExchange;
