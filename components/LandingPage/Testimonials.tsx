import Image from 'next/image';
import {avatar} from '../../assets/images';

interface Props {
  body?: string;
  name?: string;
  job?: string;
}

const TESTIMONIALS = [
  {
    name: 'Jerry Asih',
    job: 'Senior Software Engineer',
    body: 'Dayo is a very hardworking and dedicated individual. He is a great team player and is always willing to help others. He is a great asset to any team.',
  },
  {
    name: 'Ayomide Oso',
    job: 'Co-founder at Dojah',
    body: 'Dayo is a very hardworking and dedicated individual. He is a great team player and is always willing to help others. He is a great asset to any team.',
  },
  {
    name: 'Aanuoluwapo Sebiomo',
    job: 'Software Product Designer',
    body: 'Dayo is a very hardworking and dedicated individual. He is a great team player and is always willing to help others. He is a great asset to any team.',
  },
  {
    name: 'Jolaade Philips',
    job: 'Content Marketing Manager at eqtble',
    body: 'Dayo is a very hardworking and dedicated individual. He is a great team player and is always willing to help others. He is a great asset to any team.',
  },
  {
    name: 'Oyindamola Ajibike',
    job: 'Product Designer',
    body: 'Dayo is a very hardworking and dedicated individual. He is a great team player and is always willing to help others. He is a great asset to any team.',
  },
  {
    name: 'Pinheiro Samuel',
    job: 'Senior Software Engineer',
    body: 'Dayo is a very hardworking and dedicated individual. He is a great team player and is always willing to help others. He is a great asset to any team.',
  },
];

function Testimonial({body, name, job}: Props) {
  return (
    <div className="rounded-xl bg-[#19202A] p-6 lg:p-8">
      <p className="mt-4 text-body dark:text-grey-600">
        {body ??
          'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.'}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <div className="h-12 w-12">
          <Image alt="portrait of ..." src={avatar} width={48} height={48} />
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
    <section className="pb-30 pt-16" id="testimonials" tabIndex={-1}>
      <h2 className="text-2lg font-bold text-grey dark:text-white lg:text-xl">
        What People are saying about me
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {Array.from({length: 6}).map((_, index) => (
          <Testimonial key={index} />
        ))}
      </div>
    </section>
  );
}
