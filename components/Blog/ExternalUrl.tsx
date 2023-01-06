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
      className="inline-block font-medium text-grey hover:underline hover:underline-offset-2 dark:text-white-700"
    >
      {text}
    </a>
  );
}
