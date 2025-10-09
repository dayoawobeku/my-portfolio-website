import CustomLink from '../CustomLink';

export default function HeroSection() {
  return (
    <section className="mt-10 flex h-full flex-col gap-6 lg:mt-16 xl:px-[10%] 2xl:px-[16%]">
      <h1 className="text-4md font-semibold uppercase text-black dark:text-white-700 sm:text-2lg lg:text-xl xl:text-2xl">
        Frontend Engineer ✹ Product Designer ✹ Technical Writer ✹ Web
        Accessiblity Advocate
      </h1>
      <p className="text-grey dark:text-grey-600 xl:text-2md xl:tracking-tight">
        I’m a frontend engineer with experience building for startups in the US,
        UK, Africa, and Asia. Before engineering, I worked in product design so
        I care a lot about how things look, feel, and work for real people. I’ve
        helped ship products at{' '}
        <a
          href="https://casperstudios.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-grey hover:underline dark:text-white-800"
        >
          Casper Studios
        </a>
        ,{' '}
        <a
          href="https://moniepoint.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-grey hover:underline dark:text-white-800"
        >
          Moniepoint
        </a>
        , and{' '}
        <a
          href="https://dojah.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-grey hover:underline dark:text-white-800"
        >
          Dojah (YC W22)
        </a>
        , and I've built open-source projects like{' '}
        <a
          href="https://albumcolors.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-grey hover:underline dark:text-white-800"
        >
          Album Colors{' '}
        </a>
        and{' '}
        <a
          href="https://sitesnap.design/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-grey hover:underline dark:text-white-800"
        >
          Sitesnap
        </a>
        , now used by 25K+ people. My goal is to build tools that improve
        people’s lives through quality software.
      </p>
      <CustomLink href="/contact" text="Contact me" />
    </section>
  );
}
