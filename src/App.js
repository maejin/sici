//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrap">
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}


function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}


export default App;
