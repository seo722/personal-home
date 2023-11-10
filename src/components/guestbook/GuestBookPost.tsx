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
 
  return (
    <div>
      <div key={post.id} className="flex justify-between items-center">
        <div className="w-5/6">
          <span>{post?.description}</span>
          <span className="ml-2 text-[12px] text-stone-500">작성자 : {post.title}</span>
          {/* <span>{post.createdAt}</span> */}
        </div>

        <GuestBookDeleteButton post={post} />
      </div>
    </div>
  );
};
export default GusetBookPost;
