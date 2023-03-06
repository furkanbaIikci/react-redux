import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../Stores/counter";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const arttir = () => {
    dispatch(increment());
  };

  const azalt = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter.value}</h2>
      <button onClick={arttir}>+</button>
      <button onClick={azalt}>-</button>
    </div>
  );
}

export default Counter;
