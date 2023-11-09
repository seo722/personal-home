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
    mutationFn: async ({ id }: GuestBookDeleteRequest) => {
      const payload: GuestBookDeleteRequest = { id };
      const { data } = await axios.delete(`/api/board/guestbook/${guestbookId}`, { data: payload });

      return data;
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
          deleteGuestBook({ id: guestbookId });
        }}
        className="text-stone-500 cursor-pointer"
      >
        delete
      </button>
    </div>
  );
};

export default GuestBookDeleteButton;
