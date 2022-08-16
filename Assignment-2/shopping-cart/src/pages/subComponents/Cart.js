import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeCartItem,
} from "../../redux/cart/actions/cartActions";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const decrementQuintity = (item) => {
    dispatch(removeCartItem(item));
  };
  const totalItem = cart.cartItems.length
    ? cart.cartItems.reduce((total, item) => total + item.quintity, 0)
    : 0;
  return (
    <div>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {cart.cartItems.length ? (
          cart.cartItems.map((item) => (
            <div className="flex justify-between border-b-2 mb-2">
              <div className="text-lg py-2">
                <p>{item.title}</p>
              </div>
              <div className="text-lg py-2">
                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                  <button
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                    onClick={() => handleAddToCart(item)}
                  >
                    <AiOutlinePlus />
                  </button>
                  <p>{item.quintity}</p>
                  <button
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                    onClick={() => decrementQuintity(item)}
                  >
                    <AiOutlineMinus />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="text-center text-lg mb-4 font-bold">
              <h2>Your cart is empty</h2>
            </div>
          </>
        )}

        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Item</p>
            <p className="text-5xl">{totalItem}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
