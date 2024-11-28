import './App.css';
import React from 'react';
import { useState } from 'react';
import { Button } from './Button';
import { Textbox } from './Textbox';
import { StoreItem } from './StoreItem';

function BarButtons() {
  return (
    <div className='bar-buttons'>
      <div className='bar-button one'></div>
      <div className='bar-button two'></div>
      <div className='bar-button three'></div>
    </div>
  )
}

function Counter({count}) {
  return (
    <div className='counter-container'>
      <p className='counter-text'>{count}</p>
    </div>
  )
}

function CounterButtons({count, setCount}) {
  function AddUp() {
    setCount(count + 1);
  }

  function AddDown() {
    setCount(count - 1);
  }

  return (
    <div className="buttons">
      <button className='button-increase' onClick={AddUp}>Increase</button>
      <button className='button-decrease' onClick={AddDown}>Decrease</button>
    </div>
  )
}

export default function App() {
  const [count, setCount] = useState(0);

  const item1 = {title: "Bat", desc: "Metal but for baseball", price: 50}
  const item2 = {title: "Ball", desc: "Ball for basketball", price: 40}
  const item3 = {title: "Net", desc: "Basketball net for sum hoops", price: 30}

  const myArray = [item1, item2, item3]

  return (
    <div className="main-window">
      <div className='main-bar'>
        <BarButtons />
      </div>
      <div className='main-body'>
        <div className='main-text'>
          <p className="main-title">COUNTER</p>
          <p>A simple React project</p>
          <CounterButtons count={count} setCount={setCount}/>
        </div>
        <Counter count={count} />
      </div>
      <Textbox />
      <Button />
      {myArray.map((element, index) => {
        return (
          <StoreItem item={element} key={index} />
        )
      })}
    </div>
  );
}
