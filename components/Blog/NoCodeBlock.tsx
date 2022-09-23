interface Props {
  span1: string;
  span2?: string;
  span3?: string;
}

export default function NoCodeBlock({span1, span2, span3}: Props) {
  return (
    <div className="relative z-10 -ml-10 col-span-3 bg-grey-800 rounded shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
      <div className="relative">
        <pre className="text-sm leading-6 text-white-800 flex ligatures-none overflow-auto text-[0.875rem] font-semibold">
          <code className="flex-none min-w-full p-5">
            <span className="flex">{span1}</span>
            <span className="flex">{span2}</span>
            <span className="flex">{span3}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
