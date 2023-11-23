import Image from 'next/image';
import {rectangles} from '../../assets/images';

export default function Expertise() {
  return (
    <section className="py-30">
      <h2 className="text-2xl text-grey dark:text-white">My Expertise</h2>

      <div className="mt-4 flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-start py-10 pr-[18px]">
            <div className="mt-[10px] mr-4">
              <Image
                alt=""
                src={rectangles}
                width={17}
                height={18}
                className="h-full w-full"
              />
            </div>
            <div className="max-w-[498px]">
              <h4 className="text-5md text-grey dark:text-white">
                Frontend Development - React Js
              </h4>
              <p className="mt-4 text-2md text-body dark:text-grey-400">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          <div className="flex items-start py-10 pr-[18px]">
            <div className="aspect-auto mt-[10px] mr-4">
              <Image
                alt=""
                src={rectangles}
                width={17}
                height={18}
                className="h-full w-full"
              />
            </div>
            <div className="max-w-[498px]">
              <h4 className="text-5md text-grey dark:text-white">
                Accessibility
              </h4>
              <p className="mt-4 text-2md text-body dark:text-grey-400">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-start py-10 pr-[18px]">
            <div className="aspect-auto mt-[10px] mr-4">
              <Image
                alt=""
                src={rectangles}
                width={17}
                height={18}
                className="h-full w-full"
              />
            </div>
            <div className="max-w-[498px]">
              <h4 className="text-5md text-grey dark:text-white">
                UI/UX Design
              </h4>
              <p className="mt-4 text-2md text-body dark:text-grey-400">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="flex items-start py-10 pr-[18px]">
            <div className="aspect-auto mt-[10px] mr-4">
              <Image
                alt=""
                src={rectangles}
                width={17}
                height={18}
                className="h-full w-full"

              />
            </div>
            <div className="max-w-[498px]">
              <h4 className="text-5md text-grey dark:text-white">SEO </h4>
              <p className="mt-4 text-2md text-body dark:text-grey-400">
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
