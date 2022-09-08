interface Props {
  text: string;
}

export default function Heading({text}: Props) {
  return <h3 className="mb-4 text-4md text-grey dark:text-white">{text}</h3>;
}
