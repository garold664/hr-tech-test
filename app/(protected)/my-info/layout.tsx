import SideBar from '@/components/SideBar';
import MyInfoHeader from '@/components/MyInfoHeader';
import Avatar from '@/components/Avatar';

interface MyInfoLayoutProps {
  children: React.ReactNode;
}
export default function MyInfoLayout({ children }: MyInfoLayoutProps) {
  return (
    <div className="layout-grid xl:gap-x-6 mx-auto bg-secondary pb-[290px]">
      <Avatar />
      <SideBar />
      <MyInfoHeader />
      <div className="layout-bg bg-primary pt-16 font-medium" />
      <main className="layout-main bg-white xl:rounded-b-2xl rounded-none px-6 xl:px-4 pt-9 pb-24 xl:w-auto">
        {children}
      </main>
    </div>
  );
}
