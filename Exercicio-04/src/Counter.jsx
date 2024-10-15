import  { useState, useEffect } from 'react';
import './Counter.css'; // Arquivo CSS separado

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
  
    useEffect(() => {
      let interval;
      if (isRunning) {
        interval = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);
      }
  
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }, [isRunning]);
  
    const toggleCounter = () => {
      setIsRunning(!isRunning);
    };
  
    return (
      <div className="counter-container">
        <h1>Contador: {count}</h1>
        <button onClick={toggleCounter}>
          {isRunning ? 'Parar Contador' : 'Iniciar Contador'}
        </button>
      </div>
    );
  };
  
  export default Counter;