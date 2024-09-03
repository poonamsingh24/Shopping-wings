import React from "react";
import Container from "./Container";
import Button from "./Button";
import OrderList from "./OrderList";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const { currentUser } = useAuth;
  return (
    <Container>
      <div className="border-2 border-dotted rounded-2xl mt-6 overflow-hidden">
        <div className="grid grid-cols-1  md:grid-cols-3 ">
          {/* {User profile} */}
          <div className="bg-gray-50 col-span-1 py-5 flex flex-col gap-4 items-center border-r-2 ">
            <div className="w-16 h-16 bg-gray-200 rounded-full"> </div>
            <h4 className="font-medium">
              {currentUser ? currentUser.displayName : "Poonam"}
            </h4>
            <h4 className="text-gray-500">
              {" "}
              {currentUser ? currentUser.email : "poonams9994101@gmail.com"}
            </h4>
            <Button>Edit Profile</Button>
          </div>
          {/* {user order list} */}
          <div className="col-span-auto md:col-span-2">
            <div className="py-5 text-center border-b-2 ">
              <h1>Orders</h1>
            </div>
            {/* if order not */}
            {/* <div className="">
              <h1>Orders Not Yet</h1>
            </div> */}
            <div>
              <OrderList />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
