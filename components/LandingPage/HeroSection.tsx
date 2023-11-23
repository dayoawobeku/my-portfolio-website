import CustomLink from '../CustomLink';

export default function HeroSection() {
  return (
    <section className="mt-10 flex h-full flex-col gap-6 lg:mt-16 xl:px-[10%] 2xl:px-[16%]">
      <h1 className="text-4md font-semibold uppercase text-black dark:text-white-700 sm:text-2lg lg:text-xl xl:text-2xl">
        Frontend Developer ✹ Product Designer ✹ Technical Writer ✹ Web
        Accessiblity Advocate
      </h1>
      <p className="text-grey dark:text-grey-600 xl:text-2md xl:tracking-tight">
        As a frontend developer with over 3 years of experience and a background
        in product design, I have dedicated my career to building products that
        look amazing, are inclusive, user-friendly, and work seamlessly. My
        passion for this craft has driven me to co-found two open-source
        projects: album colors; and Sitesnap.design, write technical articles,
        and mentor aspiring developers. These initiatives show my commitment to
        the developer community and my ability to build practical tools that
        improve people’s lives through quality software.
      </p>
      <CustomLink href="/contact" text="Contact me" />
    </section>
  );
}
