export default function ListNumber({children}: {children: React.ReactNode}) {
  return (
    <p className="my-6 font-semibold text-md text-grey dark:text-grey-100">
      {children}
    </p>
  );
}
