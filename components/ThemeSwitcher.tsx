"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {Sun, Moon} from "lucide-react"


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (<Moon />) : (<Sun />)}
    </button>
  );
};