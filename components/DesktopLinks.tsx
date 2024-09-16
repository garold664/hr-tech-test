'use client';

import { cn } from '@/lib/utils';
import type { LinkItem } from '@/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import ChevronDown from '@/assets/icons/chevron-down-big.svg';

interface DesktopLinksProps {
  links: LinkItem[];
  activeColor: string;
  spacing?: number;
  itemWidth?: number;
  className?: string;
}
export default function DesktopLinks({
  links,
  activeColor,
  className,
  spacing,
  itemWidth,
}: DesktopLinksProps) {
  const pathname = usePathname();

  // const widthStyles = `${itemWidth ? `w-${itemWidth}` : ''}`;

  const listStyles = cn(`flex ${spacing ? `gap-x-${spacing}` : ''}`, className);

  const mainLinks =
    links.length > 9
      ? [...links.slice(0, 9), { name: 'More', href: '*' }]
      : links;
  const restLinks = links.length > 9 ? links.slice(9) : [];
  return (
    <DropdownMenu>
      <ul className={listStyles}>
        {mainLinks.map((link) => (
          <li className="flex justify-center" key={link.name}>
            {link.href === '*' ? (
              <DropdownMenuTrigger className="p-4 flex items-center gap-x-2 hover:text-accent">
                {link.name} <ChevronDown />
              </DropdownMenuTrigger>
            ) : (
              <Link
                className={`p-4 rounded-t-lg w-max text-center ${
                  pathname.includes(link.href) && link.href !== '/'
                    ? `bg-${activeColor} cursor-default`
                    : 'hover:text-accent'
                }
    
            `}
                href={link.href}
                style={{
                  width: itemWidth,
                }}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {restLinks && (
        <DropdownMenuContent>
          {restLinks.map((link) => (
            <DropdownMenuItem key={link.name}>
              <Link className="hover:text-accent" href={link.href}>
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
