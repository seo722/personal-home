'use client';

import Link from 'next/link';

const MainPageMenu = () => {
  return (
    <div className="border-r-2 border-stone-500 h-full w-[240px] hidden md:flex flex-col gap-4 fixed">
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
