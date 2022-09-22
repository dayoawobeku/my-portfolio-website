interface Props {
  children: React.ReactNode;
}

export default function ListNumber({children}: Props) {
  return (
    <p className="my-6 font-semibold text-md text-grey dark:text-grey-100">
      {children}
    </p>
  );
}
