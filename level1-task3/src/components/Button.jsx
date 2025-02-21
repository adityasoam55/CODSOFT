export default function Button({ label, onClick }) {
    const isOperator = ["+", "-", "*", "/", "="].includes(label);
    const isClear = label === "C";
  
    return (
      <button
        className={`
          text-xl font-bold p-4 sm:p-5 rounded-lg transition-all duration-200
          ${isOperator ? "bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700" : 
            isClear ? "bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-700" : 
            "bg-gray-300 hover:bg-gray-400 text-black dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"}
        `}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
  