'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { PiSun, PiMoon } from "react-icons/pi";

export default function ThemeSwitch({ className }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Use resolvedTheme instead of manual system theme resolution
  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className='flex z-40'>
      <button
        onClick={toggleTheme}
        className="rounded-full p-2 bg-white dark:bg-black md:hover:bg-main-1 md:dark:hover:bg-main-2 transition-colors duration-200"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {isDark ? (
          <PiSun className={`${className} text-lg md:text-xl`} />
        ) : (
          <PiMoon className={`${className} text-lg md:text-xl`} />
        )}
      </button>
    </div>
  );
}