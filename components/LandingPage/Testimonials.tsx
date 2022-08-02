import React from 'react';
import Image from 'next/image';
import {
  avatar,
  nextArrowActive,
  prevArrowInactive,
} from '../../assets/images/images';

export default function Testimonials() {
  return (
    <section className="py-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <h2 className="max-w-lg text-2xl text-grey">
            What People Are Saying About My Work
          </h2>

          <div className="flex items-center gap-8">
            <div className="-mt-[2px] p-2 cursor-pointer">
              <Image alt="prev-arrow" src={prevArrowInactive} width={16} />
            </div>
            <div className="p-2 cursor-pointer">
              <Image alt="next-arrow" src={nextArrowActive} width={72} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-10 mt-18">
        <div className="max-w-md">
          <h4 className="text-2lg text-grey">
            Helped us improve our productivity
          </h4>
          <p className="mt-4 text-md text-body">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
            Laborum magna nulla duis ullamco cillum dolor.{' '}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Image alt="portrait of ..." src={avatar} width={48} height={48} />
            <div>
              <p className="text-grey">Theresa Webb</p>
              <p className="text-body">President of Sales at Google</p>
            </div>
          </div>
        </div>
        <div className="border-l border-grey-100 h-96" />
        <div className="max-w-md">
          <h4 className="text-2lg text-grey">
            Helped us improve our productivity
          </h4>
          <p className="mt-4 text-md text-body">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
            Laborum magna nulla duis ullamco cillum dolor.{' '}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Image alt="portrait of ..." src={avatar} width={48} height={48} />
            <div>
              <p className="text-grey">Theresa Webb</p>
              <p className="text-body">President of Sales at Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
