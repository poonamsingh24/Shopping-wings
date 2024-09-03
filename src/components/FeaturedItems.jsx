import React from "react";
import data_product from "../assets/data.js";
import { Link } from "react-router-dom";
import { slugify } from "./utils/slug";

export default function FeaturedItems() {
  const data = slugify(data_product);
  console.log(data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-10 gap-5">
      {data_product?.map((item) => (
        <div key={item.id} className="shadow">
          <Link to={`/productdetails/${item.slug}`}>
            <img src={item.image} alt="" className="w-full" />
            <h4 className="font-medium text-gray-600 p-1"> {item.name}</h4>
            <p className="font-semibold">Price :</p>
            <div className="flex gap-4 px-1">
              <span className="text-xl line-through font-medium text-gray-500 my-1">
                ${item.old_price}
              </span>

              <span className="text-xl font-medium text-gray-700 my-1">
                ${item.new_price}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
