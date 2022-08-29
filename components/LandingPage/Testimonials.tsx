import Image from 'next/image';
import {avatar} from '../../assets/images/images';

export default function Testimonials() {
  return (
    <section className="py-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <h2 className="max-w-lg text-2lg font-medium md:font-normal md:text-2xl text-grey dark:text-white">
            What People Are Saying About My Work
          </h2>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between mt-18 gap-10">
          <div className="md:max-w-md">
            <h4 className="text-lg md:text-2lg text-grey">
              Helped us improve our productivity
            </h4>
            <p className="mt-4 text-md text-body">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat
              irure. Laborum magna nulla duis ullamco cillum dolor.{' '}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Image
                alt="portrait of ..."
                src={avatar}
                width={48}
                height={48}
              />
              <div>
                <p className="text-grey">Theresa Webb</p>
                <p className="text-body">President of Sales at Google</p>
              </div>
            </div>
          </div>
          <div className="border-b w-full md:border-l md:border-b-0 border-grey-100 md:h-96" />
          <div className="md:max-w-md">
            <h4 className="text-lg md:text-2lg text-grey">
              Helped us improve our productivity
            </h4>
            <p className="mt-4 text-md text-body">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat
              irure. Laborum magna nulla duis ullamco cillum dolor.{' '}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Image
                alt="portrait of ..."
                src={avatar}
                width={48}
                height={48}
              />
              <div>
                <p className="text-grey">Theresa Webb</p>
                <p className="text-body">President of Sales at Google</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden my-10 border-b w-full md:border-l md:border-b-0 border-grey-100 md:h-96" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:max-w-md">
            <h4 className="text-lg md:text-2lg text-grey">
              Helped us improve our productivity
            </h4>
            <p className="mt-4 text-md text-body">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat
              irure. Laborum magna nulla duis ullamco cillum dolor.{' '}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Image
                alt="portrait of ..."
                src={avatar}
                width={48}
                height={48}
              />
              <div>
                <p className="text-grey">Theresa Webb</p>
                <p className="text-body">President of Sales at Google</p>
              </div>
            </div>
          </div>
          <div className="border-b w-full md:border-l md:border-b-0 border-grey-100 md:h-96" />
          <div className="md:max-w-md">
            <h4 className="text-lg md:text-2lg text-grey">
              Helped us improve our productivity
            </h4>
            <p className="mt-4 text-md text-body">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat
              irure. Laborum magna nulla duis ullamco cillum dolor.{' '}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Image
                alt="portrait of ..."
                src={avatar}
                width={48}
                height={48}
              />
              <div>
                <p className="text-grey">Theresa Webb</p>
                <p className="text-body">President of Sales at Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
