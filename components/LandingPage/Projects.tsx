import {useRef} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {externalLink} from '../../assets/images';

const PROJECT_ARRAY = [
  {
    heading: 'Album Colors',
    // eslint-disable-next-line quotes
    body: "A unique platform that provides color palette inspiration based on users' favorite albums.",
    image:
      'https://res.cloudinary.com/dedywga3v/image/upload/v1700569225/album-colors-cover_lpr8hf.png',
    url: 'https://albumcolors.co',
    stack: ['next js', 'typescript', 'tailwindcss', 'supabase'],
    // caseStudy: '/case-study/album-colors',
  },
  {
    heading: 'Sitesnap',
    // eslint-disable-next-line quotes
    body: "The curated platform for African websites. Creatives searching for a burst of inspiration, you're in for a treat!",
    image:
      'https://res.cloudinary.com/dedywga3v/image/upload/v1700569224/sitesnap-cover_jl6knp.png',
    url: 'https://sitesnap.design',
    stack: ['next js', 'typescript', 'tailwindcss', 'strapi cms', 'cloudinary'],
    // caseStudy: '/case-study/sitesnap',
  },
  {
    heading: 'Dojah (YC22) User Application',
    body: 'Built a fast, reliable, accessible, and UX-friendly user application to enable users carry out actions with ease.',
    image:
      'https://res.cloudinary.com/dedywga3v/image/upload/v1700569223/dojah-app-cover_fyv8ba.png',
    url: 'https://app.dojah.io',
    stack: ['react', 'redux', 'react-query', 'tailwindcss'],
  },
  {
    heading: 'Dojah (YC22) Website',
    body: 'Built a fast, accessible, mobile responsive, and highly SEO-friendly landing page with sub-routes from start to finish.',
    image:
      'https://res.cloudinary.com/dedywga3v/image/upload/v1700569224/dojah-web-cover_qzdl9x.png',
    url: 'https://dojah.io',
    stack: ['next js', 'seo'],
  },
];

interface ProjectProps {
  projectImg: string;
  heading: string;
  body: string;
  stack: Array<string>;
  url?: string;
  caseStudy?: string;
}

function Project({projectImg, heading, body, url, caseStudy}: ProjectProps) {
  const boundingRef = useRef<DOMRect | null>(null);
  return (
    <div className="group relative rounded-xl bg-[#19202A] transition-all duration-300 [perspective:800px]">
      <div
        className="p-5 lg:p-8"
        onMouseEnter={e => {
          boundingRef.current = e.currentTarget.getBoundingClientRect();
        }}
        onMouseMove={e => {
          if (!boundingRef.current) return;
          const {left, top, width, height} = boundingRef.current;

          const x = e.clientX - left;
          const y = e.clientY - top;
          const xPercent = x / width;
          const yPercent = y / height;
          const xDeg = (xPercent - 0.5) * 20;
          const yDeg = (0.5 - yPercent) * -20;

          e.currentTarget.style.setProperty('--x-deg', `${yDeg}deg`);
          e.currentTarget.style.setProperty('--y-deg', `${xDeg}deg`);
          e.currentTarget.style.setProperty('--x', `${xPercent * 100}%`);
          e.currentTarget.style.setProperty('--y', `${yPercent * 100}%`);
        }}
        onMouseLeave={() => (boundingRef.current = null)}
      >
        <div className="w-full transition-transform ease-out [transform:rotateX(var(--x-deg))_rotateY(var(--y-deg))]">
          <Image
            alt=""
            src={projectImg}
            width={1066}
            height={666}
            placeholder="blur"
            className="rounded-lg"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII="
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-50 rounded-xl transition-transform ease-in-out [transform:rotateX(var(--x-deg))_rotateY(var(--y-deg))] group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(100,149,237,0.03)_10%,transparent_80%)]" />
        <div className="mt-4">
          <h5 className="text-4md font-semibold text-grey dark:text-white">
            {heading}
          </h5>
          <p className="mt-4 text-body dark:text-grey-600">{body}</p>
          {/* <div className="mt-4 flex flex-wrap gap-4">
          {stack.map((r, index) => (
            <div
              key={index}
              className="w-fit rounded-full bg-grey px-2 pb-1 dark:bg-white-700"
            >
              <span className="text-[0.8125rem] font-semibold text-white dark:text-grey">
                {r}
              </span>
            </div>
          ))}
        </div> */}
          <div className="mt-6 flex items-center gap-6">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link -ml-3 flex items-center gap-3 text-md text-grey before:bg-white dark:text-white md:ml-0"
              >
                <span>Visit site</span>
                <Image alt="" src={externalLink} width={16} height={16} />
              </a>
            )}
            {caseStudy && (
              <Link
                href={caseStudy}
                className="nav-link text-md text-grey before:bg-white dark:text-white"
              >
                Project details
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="portfolio" className="py-16">
      <h2 className="text-2lg font-bold text-grey dark:text-white lg:text-xl">
        Projects
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        {PROJECT_ARRAY.map((project, index) => (
          <Project
            key={index}
            projectImg={project.image}
            heading={project.heading}
            body={project.body}
            stack={project.stack}
            url={project.url}
            // caseStudy={project.caseStudy}
          />
        ))}
      </div>
    </section>
  );
}
