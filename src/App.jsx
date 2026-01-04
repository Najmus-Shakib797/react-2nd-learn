import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
// import Posts from "./Posts";
import Albums from "./Albums";

// const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );
// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

// const fetchPost = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

const fetchAlbums = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  return res.json();
};

function App() {
  // const friendPromise = fetchFriends();
  // const postPromise = fetchPost();

  const albumsPromise = fetchAlbums();

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

      <Suspense fallback={<h4>Album is loading</h4>}>
        <Albums albumsPromise={albumsPromise}></Albums>
      </Suspense>

      {/* <Suspense fallback={<h4>Posts are coming...</h4>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are Coming...</h3>}>
        <Friends friendPromise={friendPromise}></Friends>
      </Suspense> */}
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
