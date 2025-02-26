import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white text-gray-800 text-center w-80">
      <h2 className="text-lg font-bold">Counter</h2>
      <p className="text-2xl my-2">{count}</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;