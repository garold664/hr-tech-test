import { mainNavigation } from '@/data/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DesktopLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex ml-16 mr-14 -mb-4">
      {mainNavigation.map((link) => (
        <li className="flex justify-center text-lg" key={link.name}>
          <Link
            className={`p-4 rounded-t-lg w-max ${
              pathname === link.href
                ? 'bg-primary cursor-default'
                : 'hover:text-accent'
            }`}
            href={link.href}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
