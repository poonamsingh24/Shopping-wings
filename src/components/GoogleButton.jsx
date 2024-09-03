import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ ...props }) {
  return (
    <div className=' flex items-center gap-2 justify-center border-2 my-3 rounded hover:bg-gray-100 transition-colors'>
      <FcGoogle size={20} />
      <button {...props} className='text-gray-800 font-medium py-2'>
        Sign In With Google
      </button>
    </div>
  );
}
