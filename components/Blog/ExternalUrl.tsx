interface Props {
  text: string;
  href: string;
}

export default function ExternalUrl({text, href}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block font-medium text-grey dark:text-white-700 hover:underline hover:underline-offset-2"
    >
      {text}
    </a>
  );
}