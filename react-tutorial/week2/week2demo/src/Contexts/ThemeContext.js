import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    mode : '',
    handleMode : ()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function(){
    return useContext(ThemeContext)
}