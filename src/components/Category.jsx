import React from "react";
import { Link } from "react-router-dom";
import category from "./utils/category";

export default function Category() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
      {category.map((item) => (
        <div key={item.id} className="relative cursor-pointer">
          <Link to={`/category/${item.slug}`}>
            <img src={item.image} alt="" className="w-full" />
          </Link>

          <div className="bg-black/50 h-full w-full  absolute top-0 left-0">
            {" "}
          </div>

          <span className=" h-full w-full absolute top-0 left-0 grid place-items-center text-white text-5xl  font-extrabold  uppercase tracking-widest ">
            <Link to={`/category/${item.slug}`}> {item.name} </Link>
          </span>
        </div>
      ))}
    </div>
  );
}
