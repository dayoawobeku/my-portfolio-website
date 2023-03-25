import Image from 'next/image';

interface ImageProps {
  src1: string;
  alt1: string;
  src2: string;
  alt2: string;
}

export default function SideBySideImage({src1, alt1, src2, alt2}: ImageProps) {
  return (
    <div className="my-10 flex basis-full flex-wrap items-center justify-between gap-6 sm:flex-nowrap">
      <div className="relative basis-full sm:basis-1/2">
        <Image src={src1} alt={alt1} title={alt1} layout="responsive" />
      </div>
      <div className="relative basis-full sm:basis-1/2">
        <Image src={src2} alt={alt2} title={alt2} layout="responsive" />
      </div>
    </div>
  );
}
