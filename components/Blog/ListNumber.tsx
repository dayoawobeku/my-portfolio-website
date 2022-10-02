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
      } inline-flex font-semibold text-md text-grey dark:text-grey-100 mb-6`}
    >
      {children}
    </p>
  );
}
