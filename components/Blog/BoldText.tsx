interface Props {
  text: string;
}

export default function BoldText({text}: Props) {
  return (
    <strong className="mb-4 font-medium text-grey dark:text-white">
      {text}
    </strong>
  );
}
