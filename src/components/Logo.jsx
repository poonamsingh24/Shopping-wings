import React from "react";
import { Link } from "react-router-dom";
export default function ({ className }) {
  return (
    <div>
      <Link to='/'>
        <h2 className='text-2xl font-extrabold uppercase text-orange-500'>
          Shopping<span className={`${className || " "} `}>Wings</span>
        </h2>
      </Link>
    </div>
  );
}
