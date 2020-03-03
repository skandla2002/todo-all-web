<<<<<<< HEAD
import React from "react";

const Counter = () => {
  return (
    <div>
      <div>myCounter</div>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default Counter;
=======
import React from 'react';

const Counter = ({value, onIncrement, onDecrement}) => {
    return (
        <div>
            <h1>value: {value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
};

export default Counter;
>>>>>>> 3462d01b54e932b4eb8e8efcfb31fa70b3cbdaf8
