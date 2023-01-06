export default function DangerNote({note}: {note: string}) {
  return (
    <div className="relative mb-8 rounded-r bg-danger-300 py-2 before:absolute before:top-0 before:h-full before:w-1 before:bg-danger before:content-['']">
      <p className="pl-4 text-md font-medium text-danger">{note}</p>
    </div>
  );
}
