import React, {createContext, useContext, useState, useEffect} from 'react';

//create context
const ThemeContext = createContext();

//create hook
export const useTheme = () =>{
    const context = useContext(ThemeContext);
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState( () => {
        //if system uses dark theme
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
            return 'dark';
        }
        //if not, deafult to light
        return 'light';
    });

    useEffect(() =>{
        //apply the new theme
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        //change themes
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    //everything needed to know about the theme
    const value = {
        theme, //current theme
        toggleTheme, //theme switcher function
        //bolleans to recognize dark or light
        isDark: theme === 'dark',
        isLight: theme === 'light'
    };

    return (
        //this way all children will have access to the theme context
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );

};