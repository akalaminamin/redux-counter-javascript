import React from "react";
import Cart from "./subComponents/Cart";
import Product from "./subComponents/Product";
import TotalPrice from "./subComponents/TotalPrice";
const Home = () => {
  const productsList = [
    {
      id:1,
      title:"Asus Vivobook X515MA",
      quintity:20,
      price: 3000,
    },
    {
      id:2,
      title:"Asus Vivobook X515MA",
      quintity:50,
      price: 3500,
    },
    {
      id:3,
      title:"Asus Vivobook X515MA",
      quintity:30,
      price: 1000,
    }
  ]
  return (
    <>
      <div className="bg-gray-50 h-full md:h-screen">
        <div className="grid place-items-center">
          <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            {
              productsList.map(product =>(
                <Product key={product.id} product={product}/>
              ))
            }
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <Cart />
            <TotalPrice />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
