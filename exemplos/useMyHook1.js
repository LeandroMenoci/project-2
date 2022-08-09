import { useEffect, useRef, useState } from 'react';
import './App.css';

const useMyHook = (cb, delay = 2000) => {
  const savedCb = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      cb();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(2000);
  const [incrementor, setIncrementor] = useState(100);
  useMyHook(() => setCounter((c) => c + 1), delay);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        + {incrementor}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        - {incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
      />
    </div>
  );
}

export default App;
