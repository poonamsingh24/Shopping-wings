import React from "react";
import { Link } from "react-router-dom";
import category from "./utils/category";

export default function MenuLinks({ className }) {
  return (
    <div className={className}>
      {category.map((item) => (
        <div key={item.id}>
          <Link
            to={`category/${item.slug}`}
            className='font-medium hover:text-orange-500 '
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
