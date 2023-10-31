'use client';

import Link from 'next/link';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import UserAvatar from '@/components/UserAvatar';

interface UserAccountProps {
  user: Pick<User, 'name' | 'image' | 'email'>;
}

const UserAccountNav = ({ user }: UserAccountProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={{ name: user.name || null, image: user.image || null }} className="h-8 w-8" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white dark:bg-black border-0" align="end">
        <div className="flex items-center justify-around gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && <p className="w-[200px] truncate text-sm text-zinc-700 dark:text-zinc-400">{user.email}</p>}
          </div>
        </div>

        <DropdownMenuSeparator className="bg-zinc-300 dark:bg-zinc-700" />

        <DropdownMenuItem asChild>
          <Link href="/">Feed</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/">Create community</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/">Settings</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-zinc-300 dark:bg-zinc-700" />

        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(e) => {
            e.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            });
          }}
        >
          {/* callbackurl이 안 되네,,,*/}
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
