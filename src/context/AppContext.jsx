import { createContext, useReducer } from "react";

const initialState = {
  selectedGiftCard: null,
  amount: "",
  currency: "USD",
};

const AppContext = createContext(initialState);

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_GIFT_CARD":
      return { ...state, selectedGiftCard: action.payload };
    case "SET_AMOUNT":
      return { ...state, amount: action.payload };
    case "SET_CURRENCY":
      return { ...state, currency: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
