import { useState } from "react";
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";

export default function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(expression).toString());
      } catch {
        setResult("Error");
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 transition-all duration-300 p-4">
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm transition-all duration-300">
        <Display expression={expression} result={result} />
        <ButtonsPanel onButtonClick={handleClick} />
      </div>
    </div>
  );
}
