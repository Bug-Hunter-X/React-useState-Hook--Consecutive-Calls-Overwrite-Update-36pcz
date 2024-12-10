```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered with count:', count);
  }, [count]); // Add count to the dependency array

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // This will cause the bug
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```