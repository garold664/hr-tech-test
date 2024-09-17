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
export default function MyInfoHeader() {
  return (
    <header className="flex flex-col justify-end layout-header  pt-16">
      <div className="flex justify-between items-center">
        <h1 className="text-[28px] font-bold mb-7">Alexandra Kuibyshevskaya</h1>
        <div className="flex gap-x-4 mb-auto">
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
      <DesktopLinks
        links={MyInfoLinks}
        activeColor="white"
        spacing={4}
        itemWidth={90}
        className="text-sm"
      />
    </header>
  );
}
