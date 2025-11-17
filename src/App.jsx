import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage"

function App() {

  const [darkMode, setDarkMode] = useLocalStorage("theme", false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-yellow-300">
        Day 9 - Custom Hook & Dark Mode
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-6 py-3 rounded-xl text-white bg-blue-600 dark:bg-yellow-500 dark:text-black hover:opacity-70 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  )
}

export default App;