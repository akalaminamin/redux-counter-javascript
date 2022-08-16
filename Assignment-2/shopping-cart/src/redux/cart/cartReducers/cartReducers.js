import {
  ADD_TO_CART,
  DELETE_CART_PRODUCT,
  REMOVE_CART_ITEM_QUINTITY,
} from "../actionTypes";

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducers = (state = initialState, { type, payload }) => {
  const existProduct = state.cartItems.find((item) =>
    item.id === payload.id ? true : false
  );
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: existProduct
          ? state.cartItems.map((item) =>
              item.id === payload.id
                ? { ...item, quintity: item.quintity + 1 }
                : item
            )
          : [...state.cartItems, { ...payload, quintity: 1 }],
      };

    case REMOVE_CART_ITEM_QUINTITY:
      const existItem = state.cartItems.find((item) =>
        item.id === payload.id ? true : false
      );
      if (existItem.quintity === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== payload.id),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === payload.id
              ? { ...item, quintity: item.quintity - 1 }
              : item
          ),
        };
      }
    case DELETE_CART_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
      };

    default:
      return state;
  }
};

export default cartReducers;
