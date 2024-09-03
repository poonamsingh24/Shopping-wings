import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "./utils/slug";
import new_collections from "../assets/new_collections";

export default function NewArrivals() {
  const data = slugify(new_collections);
  console.log(data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-20 gap-x-5 gap-y-5 sm:gap-y-20">
      {new_collections?.map((item) => (
        <div key={item.id} className="shadow">
          <Link to={`/productdetails/${item.slug}`}>
            <img src={item.image} alt="" className="w-full" />
            <h4 className="font-medium text-gray-600 p-1"> {item.name}</h4>
            <p className="font-semibold px-1">Price :</p>
            <div className="flex gap-4 px-2">
              <span className="text-xl line-through font-medium text-gray-500 my-1">
                ${item.old_price}
              </span>

              <span className="text-xl font-medium text-gray-700 mt-1">
                ${item.new_price}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
