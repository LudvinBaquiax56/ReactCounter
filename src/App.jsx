import { useState } from "react";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleSubstract = () => {
    if (count > 0 ){
      setCount(count - 1);
    }
  };

  return (
      <div className="container">
        <h1>Counter: {count}</h1>
        <hr />
        <button onClick={handleAdd}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>-</button>
      </div>
  );
}

export default App
