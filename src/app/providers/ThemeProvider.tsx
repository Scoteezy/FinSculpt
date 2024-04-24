"use client";
import { ReactNode, createContext, useMemo, useState } from "react";

import { ThemeContextType } from "@/src/shared/model/types";
const defaultValue:ThemeContextType = {
  theme: "dark",
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultValue);

const ThemeProvier = ({children} :{ children: ReactNode})=>{
  const [theme,setTheme] = useState<"dark" | "light">("light");

  const contextValue = useMemo(() => {
    return { theme, setTheme };
  }, [theme, setTheme]); 


  return(
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvier;