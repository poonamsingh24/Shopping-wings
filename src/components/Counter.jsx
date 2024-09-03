import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
export default function Counter() {
  const [count, setCount] = React.useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center py-4 gap-5">
      <button
        onClick={decrement}
        className="ring-2 ring-gray-800 hover:bg-gray-700 hover:text-gray-50 rounded-sm w-8 h-8  grid place-items-center "
      >
        <FaMinus />
      </button>
      <p className="text-2xl ">{count}</p>
      <button
        onClick={increment}
        className="ring-2 ring-gray-800 rounded-sm w-8 h-8 hover:bg-gray-700 hover:text-gray-50 grid place-items-center"
      >
        <FaPlus />
      </button>
    </div>
  );
}
