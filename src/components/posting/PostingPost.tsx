'use client';

import { Post, User, Board } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';

interface PostProps {
  post: Post & {
    author: User;
    board: Board;
  };
}

const PostingPost = ({ post }: PostProps) => {
  const router = useRouter();
  const dateFnsDate = new Date(post.createdAt);

  return (
    <div>
      <Card
        className="group/title dark:bg-stone-900 dark:border-none hover:cursor-pointer shadow"
        onClick={() => {
          console.log(post.id);
          router.push(`/posting/${post.id}`);
        }}
      >
        <CardHeader className="group-hover/title:underline p-4 pl-5">
          <CardTitle className="text-xl">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pl-5 pt-0">
          <span className="font-semibold text-[14px] text-stone-500">{post.author?.name} •</span>
          <time dateTime={post.createdAt.toDateString()}>
            <span className="ml-1 text-[12px] text-stone-500">{format(dateFnsDate, 'MM.dd HH:mm')}</span>
          </time>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostingPost;
