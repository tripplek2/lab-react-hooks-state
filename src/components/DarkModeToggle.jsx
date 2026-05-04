import React from 'react'

const DarkModeToggle = ({ darkmode, toggle}) => {
 
  return (
    <button onClick={toggle}> 
     {darkmode ? "Toggle Light Mode" : "Toggle Dark Mode"}

    </button> )}

export default DarkModeToggle
