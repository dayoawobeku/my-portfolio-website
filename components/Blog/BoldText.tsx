export default function BoldText({text}: {text: string}) {
  return (
    <strong className="mb-4 font-medium text-grey dark:text-white">
      {text}
    </strong>
  );
}
