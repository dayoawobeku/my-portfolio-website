import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Image({src, alt, width, height}: ImageProps) {
  return (
    <div className="my-10 flex">
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        title={alt}
        objectFit="cover"
      />
    </div>
  );
}
