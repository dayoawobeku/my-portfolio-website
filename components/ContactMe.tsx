import React from 'react';

export default function ContactMe() {
  return (
    <section className="mt-30">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl text-grey">You’ve got a project?</h2>
        <h2 className="text-xl text-grey">
          I’ll be happy to{' '}
          <a
            href="mailto:dayoawobeku@gmail.com"
            className="underline underline-offset-2"
          >
            discuss it
          </a>
        </h2>
        <h2 className="text-xl text-grey">with you</h2>
      </div>
    </section>
  );
}
