import React from "react";

import { orders } from "../orderItems";

export default function () {
  return (
    <>
      <div className="container mx-auto relative overflow-x-auto -z-10">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.sr}
                className="bg-white border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">{order.sr}</td>
                <td className="px-6 py-4">
                  <img
                    src={order.imgUrl}
                    alt={order.title}
                    className="h-16 w-16 object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{order.title}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{order.amount}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
