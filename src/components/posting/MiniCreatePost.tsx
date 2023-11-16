'use client';

import { FC } from 'react';
import { Session } from 'next-auth';
import { usePathname, useRouter } from 'next/navigation';

import { ImageIcon, Link2 } from 'lucide-react';
import UserAvatar from '@/components/UserAvatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface MiniCreatePostProps {
  session: Session | null;
}

const MiniCreatePost: FC<MiniCreatePostProps> = ({ session }: MiniCreatePostProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-[300px] rounded-md bg-white dark:bg-stone-900 shadow">
      <div className="h-full px-6 py-4 flex justify-between gap-6">
        <div className="relative">
          <UserAvatar user={{ name: session?.user.name || null, image: session?.user.image || null }} />
        </div>

        <Input readOnly onClick={() => router.push(pathname + '/create')} placeholder="Create Post" />
      </div>
    </div>
  );
};

export default MiniCreatePost;
