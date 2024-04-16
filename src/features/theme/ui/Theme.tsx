"use client";
import { useEffect,useState } from "react";

import { Switch } from "@/src/shared/ui";


const Theme = ({className}:{className?:string}) => {
  const [theme,setTheme] = useState("");

  useEffect(()=>{
    if (localStorage.theme === "dark" || (!("theme" in localStorage) 
    && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";

    } else {
      document.documentElement.classList.remove("dark");
    }
  },[setTheme]);
  const switchTheme = () => {
    if(theme==="dark"){
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    }else{
      document.documentElement.classList.add("dark");
      setTheme("dark");

    }
  };

  return (
    
    <div className={className}>
      <Switch onClick={switchTheme}
        value={theme}/>
    </div>
  );
};

export default Theme;