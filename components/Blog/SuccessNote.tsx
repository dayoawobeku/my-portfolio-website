interface Props {
  note: string;
}

export default function SuccessNote({note}: Props) {
  return (
    <div className="before:content-[''] before:w-1 before:h-full before:top-0 before:bg-success before:absolute mb-8 bg-success-200 relative rounded-r py-2">
      <p className="font-medium text-md text-success pl-4">{note}</p>
    </div>
  );
}
