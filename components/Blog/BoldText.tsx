interface Props {
  text: string;
}

export default function BoldText({text}: Props) {
  return (
    <strong className="text-grey font-medium dark:text-white mb-4">
      {text}
    </strong>
  );
}
