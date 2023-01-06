import Link from 'next/link';

interface Props {
  text: string;
  href: string;
}

export default function LocalLink({text, href = ''}: Props) {
  return (
    <Link href={href}>
      <a className="inline-block text-md font-medium text-grey hover:underline hover:underline-offset-2 dark:text-white-700">
        {text}
      </a>
    </Link>
  );
}
