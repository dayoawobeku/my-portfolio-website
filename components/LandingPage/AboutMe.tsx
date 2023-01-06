import Image from 'next/image';
import CustomLink from '../CustomLink';

export default function AboutMe() {
  return (
    <section className="py-18">
      <div className="flex flex-wrap items-center justify-between gap-8 md:flex-nowrap">
        <div className="md:max-w-[428px] lg:max-w-[568px]">
          <h2 className="text-2lg font-medium text-grey dark:text-white-700 md:text-2xl md:font-normal">
            Frontend React Developer
          </h2>
          <p className="mt-6 text-2md text-body dark:text-grey-100">
            Hello again! I'm Dayo Awobeku.
          </p>
          <p className="mt-4 text-2md text-body dark:text-grey-100">
            I love to solve real problems with friendly professionals and
            wonderful people!
          </p>
          <CustomLink href="/about" text="Get to know more about me" />
        </div>
        <Image
          alt="dayo"
          src="https://res.cloudinary.com/dspbvhlt6/image/upload/v1664577695/website-images/about-me_f9g5hw.png"
          width={536}
          height={350}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII="
        />
      </div>
    </section>
  );
}
