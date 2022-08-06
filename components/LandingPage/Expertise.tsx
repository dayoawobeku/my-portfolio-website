import Image from 'next/image';
import {rectangles} from '../../assets/images/images';

export default function Expertise() {
  return (
    <section className="py-30">
      <h2 className="text-2xl text-grey">My Expertise</h2>

      <div className="flex justify-between mt-4">
        <div className="flex flex-col">
          <div className="py-10 pr-[18px] flex items-start">
            <div className="mt-[10px] mr-4">
              <Image
                alt=""
                src={rectangles}
                width={17}
                height={18}
                layout="fixed"
              />
            </div>
            <div className="max-w-[498px]">
              <h4 className="text-5md text-grey">
                Frontend Development - React Js
              </h4>
              <p className="mt-4 text-2md text-body">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          <div className="py-10 pr-[18px] flex items-start">
            <div className="mt-[10px] mr-4 aspect-auto">
              <Image
                alt=""
                src={rectangles}
                width={17}
                height={18}
                layout="fixed"
              />
            </div>
            <div className="max-w-[498px]">
              <h4 className="text-5md text-grey">Accessibility</h4>
              <p className="mt-4 text-2md text-body">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="py-10 pr-[18px] flex items-start">
            <div className="mt-[10px] mr-4 aspect-auto">
              <Image
                alt=""
                src={rectangles}
                width={17}
                height={18}
                layout="fixed"
              />
            </div>
            <div className="max-w-[498px]">
              <h4 className="text-5md text-grey">UI/UX Design</h4>
              <p className="mt-4 text-2md text-body">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="py-10 pr-[18px] flex items-start">
            <div className="mt-[10px] mr-4 aspect-auto">
              <Image
                alt=""
                src={rectangles}
                width={17}
                height={18}
                layout="fixed"
              />
            </div>
            <div className="max-w-[498px]">
              <h4 className="text-5md text-grey">SEO </h4>
              <p className="mt-4 text-2md text-body">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
