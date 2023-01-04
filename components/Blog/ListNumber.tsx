export default function ListNumber({
  children,
  extraMarginTop,
}: {
  children: React.ReactNode;
  extraMarginTop?: boolean;
}) {
  return (
    <p
      className={`${
        extraMarginTop ? 'mt-8' : 'mt-6'
      } mb-6 inline-flex text-md font-semibold text-grey dark:text-grey-100`}
    >
      {children}
    </p>
  );
}
