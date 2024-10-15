// Import necessary dependencies
import React from "react";
import { ReactComponent as Sun } from "../assets/Sun.svg"; // SVG component for sun icon
import { ReactComponent as Moon } from "../assets/Moon.svg"; // SVG component for moon icon
import "../styles/DarkMode.css"; // CSS file for dark mode styling

// Define the DarkMode functional component
const DarkMode = () => {
  // Function to set dark mode
  const setDarkMode = () => {
    // Get the body element
    const body = document.querySelector("body");
    
    // Set the data-theme attribute to "dark" if body exists
    if (body) body.setAttribute("data-theme", "dark");
    
    // Store the selected theme in localStorage
    localStorage.setItem("selectedTheme", "dark");
  };

  // Function to set light mode
  const setLightMode = () => {
    // Get the body element
    const body = document.querySelector("body");
    
    // Set the data-theme attribute to "light" if body exists
    if (body) body.setAttribute("data-theme", "light");
    
    // Store the selected theme in localStorage
    localStorage.setItem("selectedTheme", "light");
  };

  // Get the currently selected theme from localStorage
  const selectedTheme = localStorage.getItem("selectedTheme");

  // Apply dark mode if it's the selected theme
  if (selectedTheme === "dark") {
    setDarkMode();
  }

  // Function to toggle between light and dark modes
  const toggleTheme = e => {
    // Check if the checkbox is checked
    if (e.target.checked) {
      // If checked, apply dark mode
      setDarkMode();
    } else {
      // If unchecked, apply light mode
      setLightMode();
    }
  };

  // Return JSX for the component
  return (
    <div className="dark_mode">
      {/* Checkbox input for toggling themes */}
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      
      {/* Label containing sun and moon icons */}
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun /> {/* Sun icon */}
        <Moon /> {/* Moon icon */}
      </label>
    </div>
  );
};

// Export the DarkMode component
export default DarkMode;
