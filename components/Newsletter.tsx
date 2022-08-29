import {SmallerInput} from './Input';

export default function Newsletter() {
  return (
    <div className="flex flex-col">
      <p className="font-medium text-4md text-grey dark:text-white">
        Stay up to date
      </p>
      <p className="max-w-xl mt-4 text-md text-body dark:text-grey-600">
        A part of my goal for this website is to create helpful content for
        front-end web devs, and my newsletter is no different! I’ll let you know
        when I publish new content, and I’ll even share exclusive
        newsletter-only content now and then.
      </p>
      <p className="mt-6 font-medium text-2md text-grey dark:text-grey-100">
        No spam, unsubscribe at any time.
      </p>

      <form className="flex flex-col md:flex-row items-start md:items-end gap-6 mt-10">
        <SmallerInput id="first_name" label="First Name" required />
        <SmallerInput id="email" label="Email" type="email" required />

        <button className="h-16 px-6 py-4 ml-0 md:ml-6 text-white rounded-sm text-md bg-grey">
          Subscribe
        </button>
      </form>
    </div>
  );
}
