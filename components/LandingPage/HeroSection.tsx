import Image from 'next/image';
import CustomLink from '../CustomLink';

export default function HeroSection() {
  return (
    <section className="mt-10 flex min-h-[400px] flex-wrap items-center justify-between gap-6 md:flex-nowrap">
      <div className="h-full md:max-w-[511px]">
        <h1 className="text-xl text-black dark:text-white-700 lg:text-4xl">
          Hi, I'm Dayo.
        </h1>
        <h1 className="text-xl text-black dark:text-white-700 lg:text-4xl">
          I build websites that your customers will love to use and pay for.
        </h1>
        <p className="mt-4 text-2md text-grey dark:text-grey-600 lg:mt-8 lg:text-3md">
          I focus on creating value through the craftsmanship of high-quality,
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
