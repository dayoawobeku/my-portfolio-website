interface Props {
  note: string;
}

export default function InfoNote({note}: Props) {
  return (
    <div className="before:content-[''] before:w-1 before:h-full before:top-0 before:bg-info before:absolute mb-8 bg-info-100 relative rounded-r py-2">
      <p className="font-medium text-md text-info pl-4">{note}</p>
    </div>
  );
}
