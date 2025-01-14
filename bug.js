```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a closure over the previous state value
    const intervalId = setInterval(() => {
      setCount(count + 1); // This uses the previous value of count, not the updated one.
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```