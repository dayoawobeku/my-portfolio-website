import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {postOne} from '../assets/images/images';

export default function BlogPosts() {
  return (
    <Link href="/">
      <a>
        <Image src={postOne} />
        <p className="mt-8 font-medium text-body text-3md">
          June 9th, 2022 - 5 min read
        </p>
        <h4 className="mt-6 text-lg font-medium text-grey">
          Why I use Tailwind in all my new projects.
        </h4>
      </a>
    </Link>
  );
}
