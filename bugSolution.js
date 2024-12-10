```javascript
import React, { useReducer } from 'react';

function MyComponent() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'increment':
        return state + action.payload;
      default:
        return state;
    }
  }, 0);

  const handleClick = () => {
    dispatch({ type: 'increment', payload: 2 }); // Increment by 2
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
```