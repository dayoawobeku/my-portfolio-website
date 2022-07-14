import React from 'react';
import Link from 'next/link';
import Image, {StaticImageData} from 'next/image';
import {
  arrow,
  dodeel,
  dojahAdmin,
  dojahApp,
  dojahLanding,
} from '../../assets/images/images';

const PROJECT_ARRAY = [
  {
    heading: 'Dojah - Identification and Verification Solution for Africa',
    body: 'Built a fast, accessible, mobile responsive, and highly SEO-friendly landing page with sub-routes.',
    image: dojahLanding,
    stack: ['react', 'seo'],
  },
  {
    heading: 'Dojah User Application',
    body: 'Built a fast, mobile responsive, and highly SEO-friendly landing page.',
    image: dojahApp,
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
    stack: ['ui design', 'tailwindcss', 'gatsby'],
  },
];

interface ProjectProps {
  projectImg: StaticImageData;
  heading: string;
  body: string;
  stack: Array<string>;
}

function Project({projectImg, heading, body, stack}: ProjectProps) {
  return (
    <div>
      <Image src={projectImg} />
      <div className="mt-10">
        <h5 className="text-grey text-4md font-medium">{heading}</h5>
        <p className="max-w-lg mt-6 text-body text-2md">{body}</p>
        <div className="flex gap-4">
          {stack.map((r, index) => (
            <div
              key={index}
              className="mt-6 bg-grey px-3 py-[10px] rounded-lg w-fit"
            >
              <span className="text-white font-medium">{r}</span>
            </div>
          ))}
        </div>

        <Link href="/">
          <a className="mt-10 inline-flex items-center gap-4">
            <span className="text-4md text-grey font-medium">Visit site</span>
            <Image src={arrow} />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-30">
      <h2 className="text-2xl text-grey">Past Projects</h2>

      <div className="mt-14 flex flex-col gap-20">
        {PROJECT_ARRAY.map((project, index) => (
          <Project
            key={index}
            projectImg={project.image}
            heading={project.heading}
            body={project.body}
            stack={project.stack}
          />
        ))}
      </div>
    </section>
  );
}
