'use client';

import { GuestBookDeleteRequest } from '@/lib/validators/guestbook';
import { Post } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface GuestBookDeleteButtonProps {
  post: Post;
}

const GuestBookDeleteButton = ({ post }: GuestBookDeleteButtonProps) => {
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
    <div>
      <button
        onClick={() => {
          deleteGuestBook();
        }}
        className="text-stone-500 cursor-pointer border rounded-2xl border-stone-500 text-[12px] p-2 font-bold"
      >
        삭제
      </button>
    </div>
  );
};

export default GuestBookDeleteButton;
