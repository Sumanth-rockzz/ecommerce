import React from "react";
const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  onOrder: () => {},
});
export default CartContext;
