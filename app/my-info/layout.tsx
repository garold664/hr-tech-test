import Image from 'next/image';
import SideBar from '@/components/SideBar';
import avatar from '@/assets/img/avatar.png';
import DesktopLinks from '@/components/DesktopLinks';
import { MyInfoLinks } from '@/data/data';

interface MyInfoLayoutProps {
  children: React.ReactNode;
}
export default function MyInfoLayout({ children }: MyInfoLayoutProps) {
  return (
    <div className="layout-grid gap-x-6 mx-auto bg-secondary">
      <div className="layout-avatar relative">
        <Image
          src={avatar}
          alt="avatar"
          className="w-[150px] h-[150px] absolute left-1/2 -translate-x-1/2 bottom-0"
        />
      </div>
      <SideBar />
      <header className="flex flex-col justify-end layout-header  pt-16">
        <h1 className="text-[28px] font-bold mb-6">Alexandra Kuibyshevskaya</h1>
        <DesktopLinks
          links={MyInfoLinks}
          activeColor="white"
          spacing={4}
          itemWidth={90}
          className="text-sm"
        />
      </header>
      <div className="layout-bg bg-primary pt-16" />
      <main className="layout-main bg-white">{children}</main>
    </div>
  );
}
