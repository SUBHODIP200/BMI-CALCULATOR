import React, { useState } from "react";

function App() {
  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [bmi, Setbmi] = useState("");
  const [message, Setmessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (Weight === "" || Height === "" || Weight === "0" || Height === "0") {
      alert("Please enter valid Weight and Height");
      return;
    }

    const weightNum = parseFloat(Weight);
    const heightNum = parseFloat(Height);

    const bmiValue = (weightNum / (heightNum * heightNum)) * 703;
    Setbmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      Setmessage("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      Setmessage("You have a normal weight");
    } else {
      Setmessage("You are overweight");
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center font-sans">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          BMI CALCULATOR
        </h2>
        <form onSubmit={calculateBMI}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Weight (lbs)
            </label>
            <input
              type="text"
              placeholder="Enter your weight"
              value={Weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Height (in)
            </label>
            <input
              type="text"
              placeholder="Enter your height"
              value={Height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
            />
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
              type="submit"
            >
              Submit
            </button>
            <button
              className="bg-white text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white font-bold py-2 px-4 rounded-lg transition duration-200"
              onClick={reload}
              type="button"
            >
              Reload
            </button>
          </div>

          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Your BMI is: {bmi}
            </h3>
            <p className="text-gray-600">{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
