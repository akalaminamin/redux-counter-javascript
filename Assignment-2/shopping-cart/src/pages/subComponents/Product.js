import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/actions/cartActions";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div className="flex justify-between px-4 items-center">
          <div className="text-lg font-semibold">
            <p>
              {product.title} ({product.quintity})
            </p>
            <p className="text-gray-400 text-left">Tk {product.price}</p>
          </div>
          <div className="text-lg font-semibold">
            <button
              className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
              onClick={handleAddToCart}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
