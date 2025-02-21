export default function Display({ expression, result }) {
    return (
      <div className="mb-4 p-4 bg-gray-900 text-white dark:bg-gray-700 rounded-lg text-right 
                      transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
        <div className="text-lg text-gray-400">{expression || "0"}</div>
        <div className="text-3xl font-bold">{result}</div>
      </div>
    );
  }
  