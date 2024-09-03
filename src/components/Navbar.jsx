import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useAuth } from "../hooks/useAuth";
import Container from "./Container";
import { MdMenu } from "react-icons/md";
import Mobile from "./Mobile";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import { IoMdClose } from "react-icons/io";
import Cart from "./Cart";
import { FiUser } from "react-icons/fi";
import SearchInput from "./SearchInput";

export default function Navbar() {
  const { currentUser } = useAuth();
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <header className='z-50 py-4 top-0 bg-orange-300 sticky'>
        <Container className='flex items-center justify-between  '>
          {/* logog */}
          <Logo className={"text-black"} />
          <div className='flex gap-5 items-center'>
            <Cart className={"md:hidden"} />
            {/* menu */}
            <button className='md:hidden' onClick={toggleMenu}>
              {" "}
              <MdMenu size={25} />
            </button>
          </div>

          {/* mobile menu */}
          {showMenu && (
            <div
              className='fixed left-0 top-0 bottom-0 right-0 bg-white '
              onClick={toggleMenu}
            >
              <div className='bottom-0  absolute left-0 top-0 bg-orange-100 shadow w-3/4'>
                <IoMdClose
                  size={25}
                  className='absolute top-4 cursor-pointer right-4'
                />
                <Mobile />
              </div>
            </div>
          )}

          <MenuLinks className={"hidden md:flex items-center gap-6 "} />

          {/* auth */}
          <div className='hidden md:flex items-center gap-6 cursor-pointer '>
            <Cart />
            {currentUser !== null ? (
              <div className='flex items-center gap-6'>
                <Link
                  to='/profile'
                  className='font-medium hover:text-orange-500'
                >
                  <FiUser size={20} />
                </Link>
                <Logout />
              </div>
            ) : (
              <div className='flex items-center gap-6'>
                <Link
                  to='/login'
                  className='font-medium bg-orange-500 text-white px-4 py-1 rounded'
                >
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='font-medium bg-gray-800 text-white px-3 py-1 rounded'
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </Container>
      </header>
    </>
  );
}
