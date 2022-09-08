interface Props {
  text: string;
  href: string;
}

export default function AnchorTag({text, href}: Props) {
  return (
    <h2 id={href}>
      <a
        href={'#' + href}
        className="inline-block my-8 text-lg font-medium text-info hover:underline hover:underline-offset-2"
      >
        {text}
      </a>
    </h2>
  );
}
