export default function SuccessNote({note}: {note: string}) {
  return (
    <div className="relative mb-8 rounded-r bg-success-200 py-2 before:absolute before:top-0 before:h-full before:w-1 before:bg-success before:content-['']">
      <p className="pl-4 text-md font-medium text-success">{note}</p>
    </div>
  );
}
