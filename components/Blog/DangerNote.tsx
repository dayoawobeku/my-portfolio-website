interface Props {
  note: string;
}

export default function DangerNote({note}: Props) {
  return (
    <div className="before:content-[''] before:w-1 before:h-full before:top-0 before:bg-danger before:absolute mb-8 bg-danger-300 relative rounded-r py-2">
      <p className="font-medium text-md text-danger pl-4">{note}</p>
    </div>
  );
}
