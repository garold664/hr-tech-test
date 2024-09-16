import Link from 'next/link';

import { Button } from './ui/button';
import Image from 'next/image';

import MenuIcon from '../assets/icons/menu.svg';

import avatar from '../assets/img/avatar.png';
import SearchBar from './SearchBar';

export default function Nav() {
  return (
    <nav className="relative flex items-center justify-between px-6 py-2">
      <Link href="/" className="text-xl hover:text-accent">
        HarmonyHR
      </Link>
      <SearchBar />
      <div className="flex gap-6 items-center">
        <Button variant={'ghost'} className="p-1 h-auto">
          <MenuIcon />
        </Button>
        <Link
          href="/profile"
          className="hover:shadow-xl hover:shadow-accent rounded-full"
        >
          <Image src={avatar} alt="avatar" className="w-9 h-9 rounded-full" />
        </Link>
      </div>
    </nav>
  );
}
