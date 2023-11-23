import Link from 'next/link';
interface NavLinkProps {
  href: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({
  href = '',
  text,
  className = '',
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      passHref
      shallow
      className={`nav-link ${className} before:bg-white-800' }
      text-white-800`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}
