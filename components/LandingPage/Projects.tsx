import Image, {StaticImageData} from 'next/image';
import {
  dodeel,
  dojahAdmin,
  dojahApp,
  dojahLanding,
} from '../../assets/images/images';
import CustomLink from '../CustomLink';

const PROJECT_ARRAY = [
  {
    heading: 'Dojah - Identification and Verification Solution for Africa',
    body: 'Built a fast, accessible, mobile responsive, and highly SEO-friendly landing page with sub-routes.',
    image: dojahLanding,
    url: 'https://dojah.io',
    stack: ['react', 'seo'],
  },
  {
    heading: 'Dojah User Application',
    body: 'Built a fast, mobile responsive, and highly SEO-friendly landing page.',
    image: dojahApp,
    url: 'https://app.dojah.io',
    stack: ['react', 'redux', 'react-query', 'bootstrap'],
  },
  {
    heading: 'Dojah Admin Application',
    body: 'Built a fast, mobile responsive, and highly SEO-friendly landing page.',
    image: dojahAdmin,
    stack: ['react', 'redux', 'react-query', 'tailwindcss'],
  },
  {
    heading: 'Do-Deel CDS',
    body: 'Built a web application for a digital onboarding CDS (Community Development Service) in Nigeria that automates the total user experience from registration to completion during his/her service year as a digital onboarder.',
    image: dodeel,
    url: 'https://dodeelcds.com.ng/',
    stack: ['ui design', 'tailwindcss', 'gatsby'],
  },
];

interface ProjectProps {
  projectImg: StaticImageData;
  heading: string;
  body: string;
  stack: Array<string>;
  url?: string;
}

function Project({projectImg, heading, body, stack, url}: ProjectProps) {
  return (
    <div>
      <div className="w-full">
        <Image
          alt=""
          src={projectImg}
          layout="responsive"
          width={1168}
          height={800}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII="
        />
      </div>
      <div className="mt-10">
        <h5 className="font-medium text-grey dark:text-white text-4md">
          {heading}
        </h5>
        <p className="max-w-lg mt-6 text-body dark:text-grey-600 text-2md">
          {body}
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          {stack.map((r, index) => (
            <div
              key={index}
              className="p-2 rounded-lg bg-grey dark:bg-white-700 w-fit"
            >
              <span className="text-[0.875rem] font-medium text-white dark:text-grey">
                {r}
              </span>
            </div>
          ))}
        </div>
        {url && <CustomLink externalUrl={url} text="Visit site" />}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="portfolio" className="py-30">
      <h2 className="font-medium text-2lg md:font-normal md:text-2xl text-grey dark:text-white">
        Selected Projects
      </h2>

      <div className="flex flex-col gap-20 mt-10 md:mt-14">
        {PROJECT_ARRAY.map((project, index) => (
          <Project
            key={index}
            projectImg={project.image}
            heading={project.heading}
            body={project.body}
            stack={project.stack}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
}
