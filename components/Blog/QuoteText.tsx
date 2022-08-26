interface Props {
  quote: string;
}

export default function QuoteText({quote}: Props) {
  return (
    <code className="dark:text-white text-[0.9375rem] font-semibold">
      `{quote}`
    </code>
  );
}
