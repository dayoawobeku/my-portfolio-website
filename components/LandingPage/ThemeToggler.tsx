import React, {useContext} from 'react';
import Image from 'next/image';
import {ThemeContext} from '../../context/ThemeContext';
import {darkMode, lightMode} from '../../assets/images';

export default function ThemeToggler() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <button
      className="h-10 w-10 rounded-full outline-none outline-offset-4 transition-all duration-300 hover:outline-[#d1d1d1] focus:outline-[#d1d1d1] hover:dark:outline-[#EAEAEA] focus:dark:outline-[#EAEAEA]"
      onClick={toggleTheme}
      title={theme === 'light' ? 'Activate dark mode' : 'Activate light mode'}
    >
      <div className="w-full">
        <Image
          src={theme === 'light' ? darkMode : lightMode}
          alt="light/dark mode toggle"
          className="cursor-pointer"
          width={40}
          height={40}
          layout="responsive"
          priority
        />
      </div>
    </button>
  );
}
