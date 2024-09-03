import React from "react";
import fashionCollection from "../assets/fashion-collection.jpg";
import Container from "./Container";

export default function CollectionBanner() {
  return (
    <Container>
      <div className="mb-9 relative">
        <div className="w-full h-full  object-cover overflow-hidden">
          <img src={fashionCollection} alt="" className="w-full h-[200px]" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 "></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="text-white mb-3 text-sm font-semibold md:text-2xl">
            Find Your Unique Style With Our fashion Collection
          </h2>
          <button className="px-3 py-1.5 bg-orange-400 text-white rounded-sm font-medium">
            Shop Collection
          </button>
        </div>
      </div>
    </Container>
  );
}
