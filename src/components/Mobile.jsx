import React from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Logout from "./Logout";

export default function Mobile() {
  const { currentUser } = useAuth();
  return (
    <div className="p-4 flex flex-col justify-between h-screen ">
      <div>
        <Logo />
        <div className="mt-10">
          <MenuLinks className={"flex flex-col gap-6"} />
        </div>
      </div>

      <div>
        {/* <Link to="/cart" className="font-medium hover:text-orange-500">Cart</Link> */}
        {currentUser !== null ? (
          <div className="flex items-center gap-6">
            <Link to="/profile" className="font-medium hover:text-orange-500">
              Profile
            </Link>
            <Logout />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-4 w-full">
            <Link
              to="/login"
              className="font-medium bg-orange-500 text-white px-6 py-2   rounded"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="font-medium bg-gray-800 text-white px-6 py-2          rounded"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
