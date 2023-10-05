import Image from 'next/image';
import {avatar} from '../../assets/images';

interface Props {
  body?: string;
  name?: string;
  job?: string;
}

function Testimonial({body, name, job}: Props) {
  return (
    <div className="rounded-xl bg-[#19202A] p-8">
      <p className="mt-4 text-body dark:text-grey-600">
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
          <p className="font-semibold text-grey dark:text-grey-100">
            {name ?? 'Theresa Webb'}
          </p>
          <p className="text-[0.8125rem] text-body dark:text-white-400">
            {job ?? 'President of Sales at Google'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="pt-16 pb-30" id="testimonials" tabIndex={-1}>
      <div className="grid grid-cols-3 gap-10">
        {Array.from({length: 6}).map((_, index) => (
          <Testimonial key={index} />
        ))}
      </div>
    </section>
  );
}
