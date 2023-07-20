import Image from 'next/image';
import CustomLink from '../CustomLink';

export default function HeroSection() {
  return (
    <section className="mt-10 flex min-h-[400px] flex-wrap items-center justify-between gap-6 md:flex-nowrap">
      <div className="h-full md:max-w-[551px]">
        <h1 className="text-xl text-black dark:text-white-700 lg:text-4xl">
          I create quality websites that engage and convert.
        </h1>
        <p className="mt-4 text-2md text-grey dark:text-grey-600 lg:mt-8 lg:text-3md">
          I'll bring your digital dreams to life with high-quality websites that
          prioritize user experience. By crafting code with care and attention
          to detail, I'll help you achieve your business goals.
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
        className="scale-x-[-1] transform"
      />
    </section>
  );
}
