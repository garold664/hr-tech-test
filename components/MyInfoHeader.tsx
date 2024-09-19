'use client';
import DesktopLinks from '@/components/DesktopLinks';
import { MyInfoLinks } from '@/data/data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import ChevronDown from '@/assets/icons/chevron-down.svg';
import SettingsIcon from '@/assets/icons/settings.svg';
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/store/store';
import { ScrollBar, ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { EllipsisVertical } from 'lucide-react';
export default function MyInfoHeader() {
  const {
    user: { name, avatar },
  } = useUserStore();
  return (
    <header className="flex flex-col justify-end layout-header pt-16 bg-primary relative]">
      <div className="flex gap-x-5 xl:justify-between items-center relative px-6 xl:px-0">
        <div className="relative w-[60px] h-[60px] xl:hidden">
          {avatar && (
            <Image src={avatar} fill alt="avatar" className="rounded-full" />
          )}
          {!avatar && (
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center"></div>
          )}
        </div>
        <h1 className="text-sm font-semibold xl:text-[28px] xl:font-bold mb-7">
          {name}
        </h1>
        <Button variant={'ghost'} className="absolute right-6 top-0 xl:hidden">
          <EllipsisVertical className="w-4 h-4" />
        </Button>
        <div className=" hidden xl:flex gap-x-4 mb-auto">
          <DropdownMenu>
            <Button variant={'outline'} size={'sm'} asChild>
              <DropdownMenuTrigger className="flex items-center gap-x-2">
                Request a Change <ChevronDown />
              </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <Button variant={'outline'} size={'sm'} asChild>
              <DropdownMenuTrigger className="flex items-center gap-x-2">
                <SettingsIcon className="w-4" /> <ChevronDown />
              </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex max-w-full px-1">
        <ScrollArea className="flex-1 w-1 overflow-y-visible">
          <ScrollBar orientation="horizontal" />
          <DesktopLinks
            links={MyInfoLinks}
            activeColor="white"
            spacing={4}
            itemWidth={90}
            className="text-sm"
          />
        </ScrollArea>
      </div>
    </header>
  );
}
