import React from "react";

export const AppContext = React.createContext();
const init = [
  { name: "SmartPhone", price: 30, id: 0 },
  { name: "Watch", price: 20, id: 1 },
  { name: "Shirt", price: 50, id: 2 },
  { name: "Pants", price: 100, id: 3 }
];
export const AppContextProvider = ({ children }) => {
  const [data, setData] = React.useState(init);

  const value = { data };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
