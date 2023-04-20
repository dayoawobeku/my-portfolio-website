export default function BulletPoint({children}: {children: React.ReactNode}) {
  return (
    <li className="my-4 ml-8 list-none">
      <span className="flex items-center font-bold text-grey-800 dark:text-white">
        <span>•</span>
        <span className="ml-6">{children}</span>
      </span>
    </li>
  );
}
