interface Props {
  text: string;
}

export default function ItalicizedText({text}: Props) {
  return <i className="italic dark:text-white-800">{text}</i>;
}
