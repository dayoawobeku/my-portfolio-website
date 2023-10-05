import CustomLink from '../CustomLink';

export default function HeroSection() {
  return (
    <section className="mt-16 flex h-full flex-col gap-6 px-[16%]">
      <h1 className="text-xl font-semibold uppercase text-black dark:text-white-700 lg:text-2xl">
        Frontend Developer ✹ Product Designer ✹ Technical Writer ✹ Web
        Accessiblity Advocate
      </h1>
      <p className="text-2md text-grey dark:text-grey-600 lg:text-3md">
        As a frontend developer with over 3 years of experience and a background
        in product design, I have dedicated my career to building products that
        look amazing, are inclusive, user-friendly, and work seamlessly. My
        passion for this craft has driven me to co-found two open-source
        projects: album colors; and Sitesnap.design, write technical articles,
        and mentor aspiring developers. These initiatives show my commitment to
        the developer community and my ability to build practical tools that
        make the world a better place through quality software.
      </p>
      <CustomLink href="/contact" text="Contact me" />
    </section>
  );
}
