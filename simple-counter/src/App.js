import './App.css';
import React from 'react';
import { useState } from 'react';

function Counter({count}) {
  return (
    <div>
      <p className='counterText'>Counter: {count}</p>
    </div>
  )
}

function CounterButtons() {
  const [count, setCount] = useState(0);

  function AddUp() {
    setCount(count + 1);
  }

  function AddDown() {
    setCount(count - 1);
  }

  return (
    <div className="buttons">
      <button onClick={AddUp}>+</button>
      <button onClick={AddDown}>-</button>
      <Counter count={count}/>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <div>
        <p className="title">COUNTER</p>
        <p>A simple React project</p>
      </div>
      <CounterButtons />
    </div>
  );
}
