import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [num, setNum] = useState(5);
  const counter = useSelector((state) => state.counter.value);

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input
        value={num}
        type="number"
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(Number(num)))}>
        Increment by Amount
      </button>
    </>
  );
}

export default App;
