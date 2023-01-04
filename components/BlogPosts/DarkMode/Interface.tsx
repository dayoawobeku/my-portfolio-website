export default function Interface() {
  return (
    <section className="my-8 flex basis-full flex-col items-start gap-6 rounded border-2 bg-white px-4 py-4 text-grey-800 dark:border-white-700">
      <div className="flex items-center justify-between gap-5">
        <h1 className="text-md">Our Awesome dark mode app!</h1>
        <button className="flex items-center gap-2 text-[0.875rem] font-medium text-success">
          <span>Toggle dark/light mode</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
          </svg>
        </button>
      </div>
      <div className="h-20 w-20 rounded-full bg-info" />
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
