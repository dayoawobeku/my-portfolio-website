export default function QuoteText({quote}: {quote: string}) {
  return (
    <code className="dark:text-white text-[0.9375rem] font-semibold">
      `{quote}`
    </code>
  );
}
