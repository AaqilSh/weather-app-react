// src/components/Header.js
import React, {useState} from "react";

const Header = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	
		// Add or remove the `dark` class on the `html` element
		if (!isDarkMode) {
		  document.documentElement.classList.add("dark");
		} else {
		  document.documentElement.classList.remove("dark");
		}
	  };
  return (
    <header className="relative bg-blue-500  dark:bg-gray-800  text-white px-6 py-4 flex items-center justify-between">
	<h1 className="text-2xl font-bold font-fredoka text-center w-full">Weathora</h1>
      <button onClick={toggleTheme} 
	  className="absolute right-6 bg-white text-green-600 px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition-all duration-300">
        🌞 Toggle Theme
      </button>
    </header>
  );
};

export default Header;

