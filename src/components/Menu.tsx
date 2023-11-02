'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

const MainPageMenu = () => {
  return (
    <div className="hidden md:flex flex-col gap-4">
      메뉴 들어갈 공간공간공간
      <div>
        <Link href="/guestbook" className="hover:underline text-2xl font-bold">
          방명록
        </Link>
      </div>
    </div>
  );
};

export default MainPageMenu;
