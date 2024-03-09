"use client";

import React, { useState } from "react";

type Props = {};

function InteractiveRoute({}: Props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      This is the interactive route
      <p>Here we will show some interactive elements like counter</p>
      <h3>{count}</h3>
      <button
        className="mx-10 border-2 border-slate-500 rounded-lg py-2 px-4"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        className="mx-10 border-2 border-slate-500 rounded-lg py-2 px-4"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default InteractiveRoute;
