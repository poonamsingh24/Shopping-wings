import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import { FaSearch } from "react-icons/fa";
import all_product from "../assets/all_product";
import Button from "../components/Button";
import { useCart } from "../hooks/useCart";

export default function CategoryPage() {
  const { addToCart } = useCart();
  const [searchFilter, setSearchFilter] = useState(" ");
  const [sortPrice, setSortPrice] = useState("");
  const { name } = useParams();
  const data_product = all_product.filter((item) => item.category === name);

  return (
    <Container>
      <div className="my-10">
        <div className="flex items-center flex-col md:flex-row justify-between gap-5">
          <div className="relative md:w-1/2 w-full ">
            <input
              type="search"
              placeholder="Search.."
              className="border border-gray-400 "
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            <span className="absolute top-1/2 right-3 -translate-y-1/2">
              <FaSearch className=" text-gray-500" />
            </span>
          </div>
          <select
            className="w-full sm:w-1/3 border-gray-400 text-gray-800 focus:ring-orange-500 block p-2.5 rounded-lg border-2"
            onChange={(e) => setSortPrice(e.target.value)}
          >
            <option>Filter By Price</option>
            <option value="1">High To Low</option>
            <option value="-1"> Low To High</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-20 gap-x-5 gap-y-5 sm:gap-y-20">
        {data_product
          ?.filter((item) =>
            item.name.toLowerCase().includes(searchFilter.toLowerCase())
          )
          .sort((a, b) =>
            sortPrice === "1"
              ? b.new_price - a.new_price
              : a.new_price - b.new_price
          )
          .map((item) => (
            <div key={item.id}>
              <Link to={`/productdetails/${item.slug}`}>
                <div className="relative">
                  <img src={item.image} alt="" className="w-full" />
                  <span className="bg-orange-100 text-orange-600 px-1 text-sm rounded absolute top-3 right-3 opacity-45">
                    {item?.rating}
                  </span>
                </div>
                <h4 className="font-medium text-gray-600 "> {item.name}</h4>
                <div className="flex gap-4">
                  <span className="text-xl line-through font-medium text-gray-500 my-2">
                    ${item.old_price}
                  </span>

                  <span className="text-xl font-medium text-gray-700 mt-2">
                    ${item.new_price}
                  </span>
                </div>
              </Link>
              <Button variant="accent" onClick={() => addToCart(item)}>
                Add To Cart
              </Button>
            </div>
          ))}
      </div>
    </Container>
  );
}
