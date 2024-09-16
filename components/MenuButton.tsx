'use client';

import MenuIcon from '../assets/icons/menu.svg';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { mainNavLinks } from '../data/data';
import { useState } from 'react';
import Link from 'next/link';
export default function MenuButton() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="p-1 h-auto hover:bg-primary rounded-md">
        <MenuIcon />
      </DialogTrigger>
      <DialogContent className="rounded-2xl inset-x-4 translate-x-0 w-auto">
        <ul>
          {mainNavLinks.map((link) => (
            <li className="flex justify-center text-lg" key={link.name}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
