export default function QuoteText({quote}: {quote: string}) {
  return (
    <code className="text-[0.9375rem] font-semibold dark:text-white">
      `{quote}`
    </code>
  );
}
