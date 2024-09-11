"use client";
import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>hello world</h1>
      <p>Lorem ipsum dolor sit, amet consectetur</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked the button {count} times.</p>
    </div>
  );
}
