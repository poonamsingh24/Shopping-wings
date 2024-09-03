import React from "react";
import Container from "../components/Container";
import { useSearchParams, Link } from "react-router-dom";
import Button from "../components/Button";
import all_product from "../assets/all_product";
import { useCart } from "../hooks/useCart";

export default function SearchPage() {
  const { addToCart } = useCart();
  const [searchParms, setSearchParms] = useSearchParams("");
  const q = searchParms.get("q");

  const newSearchData = all_product?.filter((item) =>
    item.name.toLowercase().includes(q.toLowercase())
  );

  return (
    <Container>
      <div className='my-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-5 mb-10 gap-x-5 gap-y-5 sm:gap-y-20'>
          {newSearchData.map((item) => (
            <div key={item.id}>
              <Link to={`/productdetails/${item.slug}`}>
                <div className='relative'>
                  <img src={item.image} alt='' className='w-full' />
                  <span className='bg-orange-100 text-orange-600 px-1 text-sm rounded absolute top-3 right-3 opacity-45'>
                    {item?.rating}
                  </span>
                </div>
                <h4 className='font-medium text-gray-600 '> {item.name}</h4>
                <div className='flex gap-4'>
                  <span className='text-xl line-through font-medium text-gray-500 my-2'>
                    ${item.old_price}
                  </span>

                  <span className='text-xl font-medium text-gray-700 mt-2'>
                    ${item.new_price}
                  </span>
                </div>
              </Link>
              <Button variant='accent' onClick={() => addToCart(item)}>
                Add To Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
