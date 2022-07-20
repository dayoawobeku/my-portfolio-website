import React from 'react';

export default function Newsletter() {
  return (
    <div className="flex flex-col">
      <p className="font-medium text-4md text-grey">Stay up to date</p>
      <p className="max-w-xl mt-4 text-md text-body">
        A part of my goal for this website is to create helpful content for
        front-end web devs, and my newsletter is no different! I’ll let you know
        when I publish new content, and I’ll even share exclusive
        newsletter-only content now and then.
      </p>
      <p className="mt-6 font-medium text-2md text-grey">
        No spam, unsubscribe at any time.
      </p>
    </div>
  );
}
