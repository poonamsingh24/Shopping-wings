import React from "react";
import { useParams } from "react-router-dom";
import Container from "./Container";
import all_product from "../assets/all_product";
import { slugify } from "./utils/slug";
import Button from "./Button";
import Counter from "./Counter";
import CollectionBanner from "./CollectionBanner";
import { useCart } from "../hooks/useCart";

export default function DetailsPage() {
  const { addToCart, removeFromCart } = useCart();
  const { slug } = useParams();
  const data_product = slugify(all_product);
  const data = all_product.find((item) => item.slug === slug);

  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  // const [product, setProduct] = React.useState({});
  // const getSignPoductDetails = () => {
  //   // get data form service
  //   const data = all_product.find((item) => item.slug === slug);
  //   setProduct(data);
  // };
  // getSignPoductDetails();
  console.log(data);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
        <div className="w-full h-full sm:h-[500px]">
          <div className="w-full h-full sm:w-96">
            <img
              src={data?.image}
              className="w-full h-full object-cover bg-origin-content "
            />
          </div>
        </div>
        <div className="py-3 md:py-7 ">
          <h4 className="text-2xl md:text-4xl font-bold">{data?.name}</h4>
          <p className="text-gray-500 my-2">{data?.description}</p>
          <span className="bg-green-600 text-white px-1 rounded  ">
            {data?.rating}
          </span>
          <div className="flex gap-3 my-3 items-center">
            <h4 className=" text-3xl ">${data?.new_price}</h4>
            <h5 className="line-through text-gray-500 text-xl ">
              ${data?.old_price}
            </h5>
          </div>
          <div className="flex items-center gap-3 py-2">
            {/* //colors// */}
            {data?.color.map((clr, i) => (
              <div key={i} className="relative group">
                <input
                  style={{ backgroundcolor: clr }}
                  type="radio"
                  value={clr}
                  name="colored-radio"
                  title={clr}
                  className="apperance-none w-8 h-8 border-gray-300 block p-1 border-2 cursor-pointer rounded-full"
                />
                <span className="absolute -top-6 text-sm font-medium hidden group-hover:block left-0 w-full h-full rounded-full">
                  {clr}
                </span>
              </div>
            ))}
          </div>

          <Counter />
          <div className="flex items-center gap-5">
            <Button variant="accent" className={"px-8 my-2"}>
              Add To Cart
            </Button>
            <Button onClick={() => addToCart(item)} className={"px-8 my-2"}>
              {" "}
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <CollectionBanner />
    </Container>
  );
}
