import React from 'react';
import { useTheme } from "./themeContext";

export function ThemeSwitcher() {
    const { theme, toggleTheme }  = useTheme();

    return(
        <button className="theme-switcher-btn"
        onClick={toggleTheme}>
            <span className='theme-selection'>
                {theme ==='light' ? 'dark' : 'light'}
            </span>
        </button>
    )
}