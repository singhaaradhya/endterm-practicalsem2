import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [nums, setNums] = useState(["", "", "", "", ""]);
  const [largest, setLargest] = useState("");

  const handleChange = (index, value) => {
    const newNums = [...nums];
    newNums[index] = value;
    setNums(newNums);
  };

  const findLargest = () => {
    const numbers = nums.map(Number);
    const max = Math.max(...numbers);
    setLargest(max);
  };

  return (
    <div className="container">
      <h1>Largest Number Finder</h1>

      {nums.map((num, index) => (
        <input
          key={index}
          type="number"
          placeholder={`Enter Number ${index + 1}`}
          value={num}
          onChange={(e) => handleChange(index, e.target.value)}
        />
      ))}

      <button onClick={findLargest}>Find Largest</button>

      <h2>{largest !== "" && `Largest Number: ${largest}`}</h2>
    </div>
  );
}

export default App;