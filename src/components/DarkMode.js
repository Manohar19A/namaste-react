import Header from "./Header";
import React from 'react';
import useDarkMode from 'use-dark-mode';
const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);
   
    return (
      <div>
        <button type="button" onClick={darkMode.disable}>
          ☀
        </button>
        <Header checked={darkMode.value} onChange={darkMode.toggle} />
        <button type="button" onClick={darkMode.enable}>
          ☾
        </button>
      </div>
    );
  };
   
  export default DarkModeToggle;