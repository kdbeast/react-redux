// import { useDispatch, useSelector } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
// } from "./redux/features/counterSlice";
// import { useState } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import CollectionPage from "./pages/CollectionPage";

function App() {
  // const dispatch = useDispatch();
  // const [num, setNum] = useState(5);
  // const counter = useSelector((state) => state.counter.value);

  return (
    // <>
    //   <h1 className="text-3xl font-bold underline">Vite + React</h1>
    //   <h2>Counter: {counter}</h2>
    //   <button onClick={() => dispatch(increment())}>Increment</button>
    //   <button onClick={() => dispatch(decrement())}>Decrement</button>
    //   <input
    //     value={num}
    //     type="number"
    //     onChange={(e) => setNum(e.target.value)}
    //   />
    //   <button onClick={() => dispatch(incrementByAmount(Number(num)))}>
    //     Increment by Amount
    //   </button>
    // </>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}

export default App;
