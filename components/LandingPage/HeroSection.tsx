import Image from 'next/image';
import CustomLink from '../CustomLink';

export default function HeroSection() {
  return (
    <section className="flex flex-wrap items-center justify-between gap-6 mt-10 md:flex-nowrap min-h-[400px]">
      <div className="md:max-w-[511px] h-full">
        <h1 className="text-xl text-black lg:text-4xl dark:text-white-700">
          Hi, I'm Dayo.
        </h1>
        <h1 className="text-xl text-black lg:text-4xl dark:text-white-700">
          I build websites that your customers will love to use and pay for.
        </h1>
        <p className="mt-4 lg:mt-8 text-2md lg:text-3md text-grey dark:text-grey-600">
          I focus on creating value through craftsmanship of high-quality,
          pixel-perfect, and user-friendly applications using well-written {''}
          <span className="text-grey-800 dark:text-white">
            React JS
          </span> and {''}
          <span className="text-grey-800 dark:text-white">Next JS</span> {''}
          code.
        </p>
        <CustomLink href="/contact" text="Contact me" />
      </div>

      <Image
        src="https://res.cloudinary.com/dspbvhlt6/image/upload/v1664732945/website-images/dayo-hero_vafht5.png"
        alt="Dayo"
        width={542}
        height={611}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII="
        priority
      />
    </section>
  );
}
