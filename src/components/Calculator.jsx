import { useState } from "react";

function Calculator() {
  const [numbers, setNumbers] = useState([0]); // State to hold an array of numbers
  const [result, setResult] = useState(0);
  const [solution, setSolution] = useState(""); // State to hold the solution

  const handleNumberChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = Number(value);
    setNumbers(newNumbers);
  };

  const handleAddition = () => {
    const res = numbers.reduce((acc, num) => acc + num, 0);
    setResult(res);
    setSolution(numbers.join(" + ") + " = " + res);
  };

  const handleSubtraction = () => {
    const res = numbers.reduce((acc, num) => acc - num);
    setResult(res);
    setSolution(numbers.join(" - ") + " = " + res);
  };

  const handleDivision = () => {
    const res = numbers.reduce((acc, num) => num !== 0 ? acc / num : "Error");
    setResult(res);
    setSolution(numbers.join(" / ") + " = " + res);
  };

  const handleMultiplication = () => {
    const res = numbers.reduce((acc, num) => acc * num, 1);
    setResult(res);
    setSolution(numbers.join(" * ") + " = " + res);
  };

  const addInput = () => setNumbers([...numbers, 0]); // Function to add a new input field
  const removeInput = (index) => setNumbers(numbers.filter((_, i) => i !== index)); // Function to remove an input field

  return (
    <div className="card calculator">
      <h2>Basic Calculator</h2>
      <div className="input-group">
        {numbers.map((num, index) => (
          <div key={index} className="input-wrapper">
            <input
              type="number"
              value={num}
              onChange={(e) => handleNumberChange(index, e.target.value)}
              placeholder={`Enter number ${index + 1}`}
            />
            <button className="btn remove-btn" onClick={() => removeInput(index)}>Remove</button> {/* Button to remove input */}
          </div>
        ))}
        <button className="btn" onClick={addInput}>Add Number</button> {/* Updated button class */}
      </div>

      <div className="btn-group">
        <button className="btn" onClick={handleAddition}>+</button>
        <button className="btn" onClick={handleSubtraction}>-</button>
        <button className="btn" onClick={handleDivision}>/</button>
        <button className="btn" onClick={handleMultiplication}>x</button>
      </div>
      
      <p className="result">Result: <span>{result}</span></p>
      <p className="solution">Solution: <span>{solution}</span></p> {/* Display the solution */}
    </div>
  );
}

export default Calculator;
