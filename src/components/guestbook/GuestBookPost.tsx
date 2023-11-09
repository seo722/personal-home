import { GuestBookDeleteRequest } from '@/lib/validators/guestbook';
import { Post } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import GuestBookDeleteButton from './GuestBookDelete';

interface PostProps {
  post: Post;
}

const GusetBookPost = async ({ post }: PostProps) => {
  const onDelete = async () => {};

  return (
    <div>
      <div key={post.id} className="flex justify-between items-center">
        <span>{post?.description}</span>
        <GuestBookDeleteButton post={post} />
      </div>
    </div>
  );
};
export default GusetBookPost;
