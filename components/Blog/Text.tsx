interface Props {
  children: React.ReactNode;
}

export default function Text({children}: Props) {
  return (
    <p className="mb-6 text-md text-grey dark:text-grey-600">{children}</p>
  );
}