'use client';

import Link from 'next/link';

const MainPageMenu = () => {
  return (
    <div className="border-r-2 border-stone-500 h-full w-[240px] hidden md:flex flex-col gap-4 fixed justify-start">
      <div className="w-full h-[200px] border">뭔가 있음</div>
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
