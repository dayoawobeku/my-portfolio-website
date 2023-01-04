import Image from 'next/image';
import {avatar} from '../../assets/images';

interface Props {
  heading?: string;
  body?: string;
  name?: string;
  job?: string;
}

function Testimonial({heading, body, name, job}: Props) {
  return (
    <div className="md:max-w-md">
      <h4 className="text-lg text-grey dark:text-grey-100 md:text-2lg">
        {heading ?? 'Helped us improve our productivity'}
      </h4>
      <p className="mt-4 text-md text-body dark:text-grey-600">
        {body ??
          'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.'}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <div className="h-12 w-12">
          <Image
            alt="portrait of ..."
            src={avatar}
            width={48}
            height={48}
            layout="responsive"
          />
        </div>
        <div>
          <p className="text-grey dark:font-medium dark:text-grey-100">
            {name ?? 'Theresa Webb'}
          </p>
          <p className="text-body dark:text-white-400">
            {job ?? 'President of Sales at Google'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-30" id="testimonials" tabIndex={-1}>
      <div className="flex items-center justify-between">
        <div className="relative flex w-full items-center justify-between">
          <h2 className="z-10 max-w-lg text-2lg font-medium text-grey dark:text-white md:text-2xl md:font-normal">
            What People Are Saying About My Work
          </h2>
          <div className="absolute -left-4 -bottom-4 h-20 w-20 rounded-full bg-[#FFCF68] dark:bg-brown" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mt-18 flex flex-col items-center justify-between gap-10 md:flex-row">
          <Testimonial />
          <div className="w-full border-b border-grey-100 dark:border-grey-800 md:h-96 md:w-0 md:border-l md:border-b-0" />
          <Testimonial />
        </div>
        <div className="my-10 w-full border-b border-grey-100 dark:border-grey-800 md:hidden md:h-96 md:border-l md:border-b-0" />
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <Testimonial />
          <div className="w-full border-b border-grey-100 dark:border-grey-800 md:h-96 md:w-0 md:border-l md:border-b-0" />
          <Testimonial />
        </div>
      </div>
    </section>
  );
}
