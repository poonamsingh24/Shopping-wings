import React from "react";
import { useAuth } from "../hooks/useAuth";
import Container from "../components/Container";
import Banner from "../components/Banner";
import Category from "../components/Category";
import FeaturedItems from "../components/FeaturedItems";
import NewArrivals from "../components/NewArrivals";
import CollectionBanner from "../components/CollectionBanner";
import { useCart } from "../hooks/useCart";

export default function Home() {
  const { cartItems, addToCart, removeFromCart } = useCart();
  console.log(cartItems);
  const { currentUser } = useAuth();
  return (
    <>
      <Container>
        <Banner />
        <Category />
      </Container>
      <div className='bg-orange-50 py-10'>
        <Container>
          <h1 className='text-center  py-10'>Featured Image</h1>
          <FeaturedItems />
        </Container>
      </div>
      <Container>
        <h1 className='text-center pt-20'>New Arrivals</h1>
        <NewArrivals />
      </Container>
      <CollectionBanner />
    </>
  );
}
