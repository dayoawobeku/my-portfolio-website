import Image from 'next/image';
import CustomLink from '../CustomLink';

export default function HeroSection() {
  return (
    <section className="flex flex-wrap items-center justify-between gap-6 mt-10 md:flex-nowrap">
      <div className="md:max-w-[511px]">
        <h1 className="text-xl text-black lg:text-4xl dark:text-white-700">
          Hi, I'm Dayo.
        </h1>
        <h1 className="text-xl text-black lg:text-4xl dark:text-white-700">
          I build websites that your customers will love to use and pay for.
        </h1>
        <p className="mt-4 lg:mt-8 text-md lg:text-4md text-grey-800 dark:text-grey-600">
          By building value through strategic web design, people-centric digital
          experiences, and developing high-quality websites that stand out from
          the competition.
        </p>
        <CustomLink href="/contact" text="Contact me" />
      </div>

      <div className="w-full md:w-[47.69%] h-[611px]">
        <Image
          src="https://res.cloudinary.com/dspbvhlt6/image/upload/v1664577699/website-images/about-image_t8x9sg.png"
          alt="Dayo"
          layout="responsive"
          width={542}
          height={611}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII="
          priority
        />
      </div>
    </section>
  );
}
