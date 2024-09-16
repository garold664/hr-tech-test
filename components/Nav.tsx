'use client';
import Link from 'next/link';

import Image from 'next/image';

import avatar from '../assets/img/avatar.png';
import SearchBar from './SearchBar';
import MenuButton from './MenuButton';
import { useEffect, useState } from 'react';
import DesktopLinks from './DesktopLinks';
import { Button } from './ui/button';

import SettingsIcon from '../assets/icons/settings.svg';
import BellIcon from '../assets/icons/bell.svg';
import HelpIcon from '../assets/icons/circle-help.svg';
import { mainNavLinks } from '@/data/data';

export default function Nav() {
  const [windowWidth, setWindowWidth] = useState<'sm' | 'xl'>('sm');
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (!container) return;
      if (container.clientWidth >= 1280) {
        setWindowWidth('xl');
      } else {
        setWindowWidth('sm');
      }
    });
    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  });
  return (
    <nav className="relative flex items-center justify-between xl:justify-start px-6 py-2 max-w-[1440px] mx-auto xl:pt-8 xl:pb-3">
      <Link href="/" className="text-xl hover:text-accent xl:font-bold xl:mb-4">
        HarmonyHR
      </Link>
      {windowWidth === 'xl' && (
        <DesktopLinks
          links={mainNavLinks}
          activeColor="primary"
          className="ml-16 mr-14 -mb-4 text-lg"
        />
      )}
      <SearchBar windowWidth={windowWidth} />
      <div className="flex gap-6 items-center xl:-mt-3 xl:ml-3">
        {windowWidth === 'sm' && <MenuButton />}
        {windowWidth === 'xl' && (
          <>
            <Button
              variant="ghost"
              className="p-0 h-auto hover:text-accent hover:bg-transparent"
            >
              <SettingsIcon className="w-6" />
            </Button>
            <Button
              variant="ghost"
              className="p-0 h-auto hover:text-accent hover:bg-transparent"
            >
              <HelpIcon className="w-6" />
            </Button>
            <Button
              variant="ghost"
              className="p-0 h-auto hover:text-accent hover:bg-transparent"
            >
              <BellIcon className="w-6" />
            </Button>
          </>
        )}
        <Link
          href="/profile"
          className="hover:shadow-sm hover:shadow-accent rounded-full shrink-0"
        >
          <Image src={avatar} alt="avatar" className="w-9 h-9 rounded-full" />
        </Link>
      </div>
    </nav>
  );
}
