import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../hooks/useCart";
export default function Cart({ className }) {
  const { cartItems } = useCart();
  return (
    <div>
      <Link to='/cart' className={`${className} relative  font-medium`}>
        <MdOutlineShoppingCart size={23} />
        <span className='absolute -top-3 -right-2 font w-5 h-5 px-1 bg-orange-500 rounded-full text-xm text-white flex item-center justify-center text-sm font-medium'>
          {cartItems?.length}
        </span>
      </Link>
    </div>
  );
}
