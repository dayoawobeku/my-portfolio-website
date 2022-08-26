interface Props {
  text: string;
}

export default function Heading({text}: Props) {
  return <h3 className="text-4md text-grey dark:text-white mb-4">{text}</h3>;
}
