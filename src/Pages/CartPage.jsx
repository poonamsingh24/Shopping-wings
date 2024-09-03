import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import { useCart } from "../hooks/useCart";

export default function CartPage() {
  const { cartItems, removeFromCart, totalItemPrice } = useCart();
  const totalPrice = totalItemPrice();
  console.log(cartItems);
  return (
    <Container>
      {cartItems?.lenght > 0 ? (
        <div className='my-20'>
          <div className='relative overflow-x-auto'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
              <thead className='text-xs text-gray-700 uppercase bg-orange-100 '>
                <tr>
                  <th scope='col' className='px-6 py-3 rounded-s-lg'>
                    Product Image
                  </th>
                  <th scope='col' className='px-6 py-3 rounded-s-lg'>
                    Product name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Qty
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    ACTION
                  </th>
                  <th scope='col' className='px-6 py-3 rounded-e-lg'>
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr className='bg-gray-100 text-gray-600' key={index}>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-600 bg-gray-100 whitespace-nowrap '
                    >
                      <div className='w-full h-16'>
                        <img
                          src={item?.image}
                          alt=''
                          className='w-full h-full object-cover'
                        />
                      </div>
                    </th>

                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-600 bg-gray-100 whitespace-nowrap '
                    >
                      {item?.name.slice(0, 30)}
                    </th>
                    <td className='px-6 py-4'>1</td>
                    <td className='px-6 py-4'>
                      <Button
                        variant='outline'
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </td>
                    <td className='px-6 py-4 text-gray-800 font-medium'>
                      {item?.new_price}
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr className='font-semibold text-gray-600  bg-gray-100'>
                  <th scope='row' className='px-6 py-3 text-base'></th>
                  <th scope='row' className='px-6 py-3 text-base'>
                    Total
                  </th>

                  <td className='px-6 py-3'>{cartItems?.lenght}</td>
                  <td className='px-6 py-3'>{totalPrice}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className='flex justify-end gap-5 mt-5'>
            <Button variant='outline'>Continue Shopping</Button>
            <Button variant='secondary'>Check Out</Button>
          </div>
        </div>
      ) : (
        <div className='flex justify-center m-20'>Order Empty</div>
      )}
    </Container>
  );
}
