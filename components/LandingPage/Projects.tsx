import Image from 'next/image';
import CustomLink from '../CustomLink';

const PROJECT_ARRAY = [
  {
    heading: 'Sitesnap',
    // eslint-disable-next-line quotes
    body: "The curated platform for African websites. Creatives searching for a burst of inspiration, you're in for a treat!",
    image:
      'https://res.cloudinary.com/dspbvhlt6/image/upload/v1675981165/website-images/sitesnap_mlxszv.png',
    url: 'https://sitesnap.design',
    stack: ['next js', 'typescript', 'tailwindcss', 'strapi cms', 'cloudinary'],
  },
  {
    heading: 'Dojah Website',
    body: 'Built a fast, accessible, mobile responsive, and highly SEO-friendly landing page with sub-routes from start to finish.',
    image:
      'https://res.cloudinary.com/dspbvhlt6/image/upload/v1665064003/website-images/project-dojah-landing_qxbexl.png',
    url: 'https://dojah.io',
    stack: ['next js', 'seo'],
  },
  {
    heading: 'Dojah User Application',
    body: 'Built a fast, reliable, accessible, and UX-friendly user application to enable users carry out actions with ease.',
    image:
      'https://res.cloudinary.com/dspbvhlt6/image/upload/v1665360941/website-images/dojah-app_clveq4.png',
    url: 'https://app.dojah.io',
    stack: ['react', 'redux', 'react-query', 'tailwindcss'],
  },
  {
    heading: 'Dojah Admin Application',
    body: 'Built the admin dashboard, ensuring the implementation of user-friendly designs to enable administrators to execute app management tasks quickly and efficiently.',
    image:
      'https://res.cloudinary.com/dspbvhlt6/image/upload/v1665064001/website-images/project-dojah-admin_ydqdox.png',
    stack: ['react', 'redux', 'react-query', 'tailwindcss'],
  },
];

interface ProjectProps {
  projectImg: string;
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
        <h5 className="text-4md font-medium text-grey dark:text-white">
          {heading}
        </h5>
        <p className="mt-6 max-w-lg text-2md text-body dark:text-grey-600">
          {body}
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          {stack.map((r, index) => (
            <div
              key={index}
              className="w-fit rounded-lg bg-grey p-2 dark:bg-white-700"
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
      <h2 className="text-2lg font-medium text-grey dark:text-white md:text-2xl md:font-normal">
        Selected Projects
      </h2>

      <div className="mt-10 flex flex-col gap-20 md:mt-14">
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
