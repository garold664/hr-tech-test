'use client';

import { useUserStore } from '@/store/store';
import Image from 'next/image';

export default function Avatar() {
  const {
    user: { avatar },
  } = useUserStore();
  return (
    <div className="layout-avatar relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150px] h-[150px]">
        {avatar && (
          <Image src={avatar} fill alt="avatar" className="rounded-full" />
        )}
        {!avatar && (
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center"></div>
        )}
      </div>
    </div>
  );
}
