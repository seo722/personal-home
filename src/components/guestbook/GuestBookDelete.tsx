'use client';

import { Post } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

interface GuestBookDeleteButtonProps {
  post: Post;
}

const GuestBookDeleteButton = ({ post }: GuestBookDeleteButtonProps) => {
  const session = useSession();
  const router = useRouter();
  const guestbookId = post.id;

  const { mutate: deleteGuestBook } = useMutation({
    mutationFn: async () => {
      console.log(post.id);
      await axios.delete(`/api/board/guestbook/${guestbookId}`, {
        data: { id: post.id },
        params: { guestbookId: post.id },
      });
    },
    onError: (err) => {
      console.log(err);
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <div
      className={cn(
        'hidden',
        session.data?.user.id === post.authorId && 'block',
        session.data?.user.name === 'pado' && 'block'
      )}
    >
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="text-stone-500 cursor-pointer border rounded-2xl border-stone-500 text-[12px] p-2 font-bold hover:text-stone-700 hover:border-stone-700 dark:hover:text-stone-300 dark:hover:border-stone-300 transition-all duration-100">
            삭제
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader className="text-sm font-semibold">방명록을 삭제하시겠습니까?</AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                deleteGuestBook();
              }}
            >
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default GuestBookDeleteButton;
// onClick={() => {
///           deleteGuestBook();
//         }}
