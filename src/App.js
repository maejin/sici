//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="wrap">
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}


function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}


export default App;
