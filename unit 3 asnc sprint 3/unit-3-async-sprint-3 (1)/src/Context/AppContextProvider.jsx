import React from "react";
const AppContext = React.createContext();
const init = [
  { id: 1, name: "Hand bag", category: "bag", price: 400 },
  { id: 2, name: "Duffle bag", category: "bag", price: 200 },
  { id: 3, name: "Leather bag", category: "bag", price: 100 },
  { id: 4, name: "Bag pack", category: "bag", price: 500 }
];
const AppContextProvider = ({ children }) => {
  const [data, setData] = React.useState(init);
  const [auth, setAuth] = React.useState(false);
  const toggle = () => {
    setAuth(!auth);
  };
  const value = { data, auth, setAuth, toggle };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
