import Link from 'next/link';

interface Props {
  text: string;
  href: string;
}

export default function LocalLink({text, href = ''}: Props) {
  return (
    <Link href={href}>
      <a className="inline-block text-md text-grey dark:text-white-700 font-medium dark:font-normal hover:underline hover:underline-offset-2">
        {text}
      </a>
    </Link>
  );
}
