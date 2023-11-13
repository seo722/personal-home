'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

const MainPageMenu = () => {
  return (
    <div className="hidden md:flex flex-col gap-4 fixed">
      메뉴 들어갈 공간공간공간
      <Link href="/posting" className="hover:underline text-2xl font-bold">
        게시글
      </Link>
      <Link href="/guestbook" className="hover:underline text-2xl font-bold">
        방명록
      </Link>
    </div>
  );
};

export default MainPageMenu;
