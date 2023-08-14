"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import style from "./theme-switcher.module.scss";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (systemTheme) {
      setTheme(systemTheme);
    }
  }, [systemTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // until the UI is mounted, display a dummy icon
  if (!mounted) {
    return <></>;
  }

  return (
    <div className='flex self-center'>
      <input
        className={style.input}
        type='checkbox'
        id='darkmode-toogle'
        onChange={toggleTheme}
        checked={theme === "light" ? false : true}
        defaultChecked={systemTheme === "light" ? false : true}
      />
      <label className={style.label} htmlFor='darkmode-toogle'></label>
    </div>
  );
};

// Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
