import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate an asynchronous operation that may fail
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCount(data.id); // Accessing data.id which might be undefined
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error appropriately, e.g., display an error message
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default App;