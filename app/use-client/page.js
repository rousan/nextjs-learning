"use client";

import { useState } from "react";

export default function WithoutRSC() {
  const [count, setCount] = useState(0);

  console.log("This is from client component");

  return (
    <main className="h-screen w-screen" style={{ padding: 30 }}>
      <span className="text-5xl">Client component</span>
      <div style={{marginTop: 10}}>
        <div className="text-xl">{count}</div>
        <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Increase
        </button>
      </div>
    </main>
  )
}
