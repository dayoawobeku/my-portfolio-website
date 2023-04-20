export default function InfoNote({note}: {note: string}) {
  return (
    <div className="relative mb-8 rounded-r bg-info-100 py-2 before:absolute before:top-0 before:h-full before:w-1 before:bg-info before:content-['']">
      <p className="pl-4 text-2md font-medium text-info">{note}</p>
    </div>
  );
}
