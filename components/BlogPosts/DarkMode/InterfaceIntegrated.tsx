import {useContext} from 'react';
import {ThemeContext} from '../../../context/ThemeContext';

export default function InterfaceIntegrated() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <section className="my-8 flex basis-full flex-col items-start gap-6 rounded border-2 px-4 py-4 text-grey-800 dark:border-white-700 dark:text-white">
      <div className="flex items-center justify-between gap-5">
        <h1 className="text-md">Our Awesome dark mode app!</h1>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 text-[0.875rem] font-medium text-success"
        >
          <span>Toggle dark/light mode</span>
          {theme === 'light' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#fff"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" />
            </svg>
          )}
        </button>
      </div>
      <div className="h-20 w-20 rounded-full bg-info dark:bg-brown" />
      <p className="font-medium">
        Creating a dark theme is so easy with next-themes and Tailwindcss!
      </p>
      <a
        href="https://www.npmjs.com/package/next-themes"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Learn more about next-themes here.
      </a>
      <p>Yada yada yada.</p>
    </section>
  );
}
