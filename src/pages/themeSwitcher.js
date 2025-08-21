import React from 'react';
import "./styles/ThemeSwitcher.css"
import { useTheme } from "./themeContext";

export function ThemeSwitcher() {
    const { theme, toggleTheme }  = useTheme();

    return(
        <button className="theme-switcher-btn"
        onClick={toggleTheme}>
            <span className='theme-selection'>
                {theme ==='light' ? <i class="fa-regular fa-moon"></i> : <i class="fa-solid fa-sun"></i>}
            </span>
        </button>
    )
}