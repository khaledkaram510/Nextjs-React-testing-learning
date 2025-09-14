"use client";
import { useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState(0);
  // try some carry function
  const handel = (num: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setCount((count) => count + num);
      console.log(e, num);
    };
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-800 text-white p-4">
      <input
        onChange={handel(1)}
        className="px-4 py-2 bg-neutral-700 text-white rounded hover:bg-neutral-600 border border-white/20"
      />
      <div className="mt-2">
        Current value:
        <span className="font-mono"> {count}</span>
      </div>
    </div>
  );
}
