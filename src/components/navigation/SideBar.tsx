'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Book, BookOpenText, Home, MenuIcon, X } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';

import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '../ModeToggle';
import UserAccountNav from './UserAccountNav';
import { useSession } from 'next-auth/react';

interface SideBarProps {
  show: boolean;
}

const SideBar = ({ show }: SideBarProps) => {
  const session = useSession();
  const pathname = usePathname();

  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isCollapsed, setIsCollapsed] = useState(show);

  const MenuItem = ({ icon, name, route }: { icon: any; name: string; route: string }) => {
    return (
      <Link
        href={route}
        onClick={() => {
          setIsCollapsed((prev: boolean) => !prev);
        }}
        className={cn(
          `text-neutral-700 dark:text-neutral-300 hover:text-cyan-700 dark:hover:text-indigo-300 transition-all duration-75 flex gap-1 [&>*]:my-auto text-md px-4 py-3 `,
          pathname === route && 'text-cyan-700 dark:text-indigo-300'
        )}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div>{name}</div>
      </Link>
    );
  };

  //트랜지션 어케하쥐...?
  const ModalOverlay = () => (
    <div
      className={cn(
        `flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 backdrop-blur-md transition-all ease-in-out`,
        isCollapsed ? 'opacity-0 ' : 'opacity-100 z-30 '
      )}
      onClick={() => {
        setIsCollapsed((prev: boolean) => !prev);
      }}
    />
  );

  return (
    <>
      <div onClick={() => setIsCollapsed((prev: boolean) => !prev)}>
        <MenuIcon className="w-6 h-6 mr-4" />
      </div>

      <div
        className={cn(
          'bg-neutral-100 dark:bg-neutral-800 w-4/6 transition-[margin-right] ease-in-out duration-500 fixed md:hidden top-0 bottom-0 right-0 z-40 flex flex-col',
          !isCollapsed ? 'mr-0' : 'mr-[-66.666667%] '
        )}
      >
        <div className="p-4 flex justify-between">
          {/* @ts-ignore */}
          <UserAccountNav user={session.data?.user} />

          <X className="w-6 h-6" onClick={() => setIsCollapsed((prev: boolean) => !prev)} />
        </div>
        <Separator className="dark:bg-neutral-700" />
        <div className="flex flex-col py-1">
          <MenuItem name="Home" route="/" icon={<Home />} />
          <MenuItem name="게시글" route="/posting" icon={<Book />} />
          <MenuItem name="방명록" route="/guestbook" icon={<BookOpenText />} />
          {/* <MenuItem name="Contact" route="/contact" icon={<Mail />} /> */}
        </div>
        <Separator className="dark:bg-neutral-700" />
        <div className="p-4 flex justify-end">
          <ModeToggle />
        </div>
      </div>

      {!isCollapsed && <ModalOverlay />}
    </>
  );
};

export default SideBar;
