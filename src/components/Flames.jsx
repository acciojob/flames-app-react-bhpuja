import React, { useState } from "react";

const FlamesApp = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculateFlames = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult("Please Enter valid input");
      return;
    }

    let nameA = name1.toLowerCase().split("");
    let nameB = name2.toLowerCase().split("");

    for (let char of [...name1.toLowerCase()]) {
      let index = nameB.indexOf(char);
      if (index !== -1) {
        nameB.splice(index, 1);
        nameA.splice(nameA.indexOf(char), 1);
      }
    }

    const remainingLength = nameA.length + nameB.length;
    const flamesResults = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
    setResult(flamesResults[remainingLength % 6]);
  };

  const clearFields = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">FLAMES Game</h2>
      <input data-testid="input1" name="name1" value={name1} onChange={(e) => setName1(e.target.value)} placeholder="Enter first name" className="border p-2 w-full" />
      <input data-testid="input2" name="name2" value={name2} onChange={(e) => setName2(e.target.value)} placeholder="Enter second name" className="border p-2 w-full mt-2" />
      <div className="mt-4 flex space-x-2">
        <button data-testid="calculate_relationship" name="calculate_relationship" onClick={calculateFlames} className="bg-blue-500 text-white px-4 py-2 rounded">
          Calculate
        </button>
        <button data-testid="clear" name="clear" onClick={clearFields} className="bg-gray-500 text-white px-4 py-2 rounded">
          Clear
        </button>
      </div>
      {result && <h3 data-testid="answer" className="mt-4 text-lg font-semibold">{result}</h3>}
    </div>
  );
};

export default FlamesApp;
