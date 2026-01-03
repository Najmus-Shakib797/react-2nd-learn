import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";

function App() {
  function handleClick() {
    alert("clicked");
  }
  const handleClick3 = () => {
    alert("clicked 3");
  };
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h3>Vite + React</h3>
      <Batsman></Batsman>

      <Counter></Counter>
      {/* <button onClick="handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick3}>Clicked me 3</button>
      <button onClick={() => alert("clicked 4")}>Click me 4</button>
      <button onClick={() => handleAdd5(10)}>Click me5</button>
    </>
  );
}

export default App;
