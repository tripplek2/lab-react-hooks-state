import React, { useState } from 'react'

const DarkModeToggle = () => {
const [darkmode, setDarkMode] =useState(false);

const toggle = () => {
  setDarkMode(prev => !prev);
};
 
  return (
    <button onClick={toggle}> 
     {darkmode ? "Toggle Light Mode" : "Toggle Dark Mode"}

    </button> )}

export default DarkModeToggle;
