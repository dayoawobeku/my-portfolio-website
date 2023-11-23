import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo-light.svg"
        alt="Logo"
        width={180}
        height={30.6}
        className="h-[30.6px] w-[180px]"
      />
    </Link>
  );
}
