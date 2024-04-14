"use client"
import React, { useEffect, useState } from "react";
import { MdOutlineNightsStay } from "react-icons/md";
const ThemeButton = () => {
  const isDarkLocal = localStorage.getItem('isDark')
  const [isDark, setIsDark] = useState(isDarkLocal === 'true');
  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  localStorage.setItem('isDark',isDark.toString())
  },[isDark]);
  return (
    <button
      onClick={() => {
        setIsDark((prev) => !prev);
      }}
      className="rounded-full p-2 duration-200 hover:scale-105 bg-slate-300 dark:bg-slate-800"
    >
       <MdOutlineNightsStay />
    </button>
  );
};

export default ThemeButton;
