import {
  ADD_TO_CART,
  REMOVE_CART_ITEM_QUINTITY,
  DELETE_CART_PRODUCT,
} from "../actionTypes";
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeCartItem = (product) => {
  return {
    type: REMOVE_CART_ITEM_QUINTITY,
    payload: product,
  };
};
export const deleteCartItem = (product) => {
  return {
    type: DELETE_CART_PRODUCT,
    payload: product,
  };
};
