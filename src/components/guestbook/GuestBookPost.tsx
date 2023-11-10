import { GuestBookDeleteRequest } from '@/lib/validators/guestbook';
import { Post } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import GuestBookDeleteButton from './GuestBookDelete';
import { format } from 'date-fns';
import { Separator } from '../ui/separator';

interface PostProps {
  post: Post;
}

const GusetBookPost = async ({ post }: PostProps) => {
  const dateFnsDate = new Date(post.createdAt);

  //왜 아이폰에서는 시간이 제대로 안 뜰까...

  return (
    <div className="p-2">
      <div key={post.id} className="flex justify-between items-center h-full">
        <div className="w-5/6">
          <div className="mb-1">
            <span className="text-[12px] text-stone-600 dark:text-stone-400 font-semibold">작성자 : {post.title}</span>
            <time dateTime={post.createdAt.toDateString()}>
              <span className="ml-2 text-[12px] text-stone-500">{format(dateFnsDate, 'MM월 dd일 HH:mm')}</span>
            </time>
          </div>
          <div>{post?.description}</div>
        </div>

        <GuestBookDeleteButton post={post} />
      </div>
    </div>
  );
};
export default GusetBookPost;
