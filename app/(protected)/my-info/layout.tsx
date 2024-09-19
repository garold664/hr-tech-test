import Image from 'next/image';
import SideBar from '@/components/SideBar';
import avatar from '@/assets/img/avatar.png';
import MyInfoHeader from '@/components/MyInfoHeader';

interface MyInfoLayoutProps {
  children: React.ReactNode;
}
export default function MyInfoLayout({ children }: MyInfoLayoutProps) {
  return (
    <div className="layout-grid gap-x-6 mx-auto bg-secondary pb-[290px]">
      <div className="layout-avatar relative">
        <Image
          src={avatar}
          alt="avatar"
          className="w-[150px] h-[150px] absolute left-1/2 -translate-x-1/2 bottom-0"
        />
      </div>
      <SideBar />
      <MyInfoHeader />
      <div className="layout-bg bg-primary pt-16 font-medium" />
      <main className="layout-main bg-white rounded-b-2xl p-4 pt-9 pb-24">
        {children}
      </main>
    </div>
  );
}
