// src/ThemeToggle.js
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
    );
};

export default ThemeToggle;
