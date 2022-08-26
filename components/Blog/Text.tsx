interface Props {
  children: React.ReactNode;
}

export default function Text({children}: Props) {
  return (
    <p className="text-md text-grey dark:text-white-400 mb-6">{children}</p>
  );
}
