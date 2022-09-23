export default function Text({children}: {children: React.ReactNode}) {
  return (
    <p className="mb-6 text-md text-grey dark:text-grey-600">{children}</p>
  );
}
