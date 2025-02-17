import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);
  const handleReset = () => setCount(0);

  return (
    <div className="card counter">
      <h2>Counter</h2>
      <p className="counter-value">{count}</p>
      <div className="btn-group">
        <button className="btn" onClick={handleIncrement}>Increment</button>
        <button className="btn" onClick={handleDecrement}>Decrement</button>
        <button className="btn reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
