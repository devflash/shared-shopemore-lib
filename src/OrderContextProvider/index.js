import { createContext, useContext, useReducer } from 'react';

const orderContext = createContext({
  cart: null,
  address: null,
  updateCart: () => {},
  updateAddress: () => {},
});

const initialState = {
  cart: {
    items: [],
    totalCost: null,
  },
  address: null,
};
const useOrders = () => {
  const [state, dispatch] = useReducer((state, newState) => {
    return {
      ...state,
      ...newState,
    };
  }, initialState);

  const updateCart = (newCart) => dispatch(newCart);

  const updateAddress = (newAddress) => dispatch({ address: newAddress });

  return {
    cart: state.cart,
    address: state.address,
    updateCart,
    updateAddress,
  };
};
export const useOrderContext = () => useContext(orderContext);

export { orderContext, useOrderContext, useOrders };
