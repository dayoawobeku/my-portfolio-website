interface Props {
  text: string;
  href: string;
}

export default function AnchorTag({text, href}: Props) {
  return (
    <h2 id={href}>
      <a
        href={'#' + href}
        className="my-8 inline-block text-info text-lg font-medium hover:underline hover:underline-offset-2"
      >
        {text}
      </a>
    </h2>
  );
}
