import Link from 'next/link';

interface Props {
  text: string;
  href: string;
}

export default function LocalLink({text, href = ''}: Props) {
  return (
    <Link href={href}>
      <a className="inline-block text-md text-white hover:underline hover:underline-offset-2">
        {text}
      </a>
    </Link>
  );
}
