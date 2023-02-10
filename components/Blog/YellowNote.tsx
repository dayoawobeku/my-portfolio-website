export default function YellowNote({note}: {note: string}) {
  return (
    <div className="relative mb-8 rounded-r bg-yellow-50 py-2 before:absolute before:top-0 before:h-full before:w-1 before:bg-yellow-400 before:content-[''] dark:bg-info-100">
      <p className="pl-4 text-2md font-medium text-yellow-600 dark:text-yellow-400">
        {note}
      </p>
    </div>
  );
}
