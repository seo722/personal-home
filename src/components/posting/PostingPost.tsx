'use client';

import { Post, User, Board } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
          router.push(`/posting/${post.id}`);
        }}
      >
        <CardHeader className="group-hover/title:underline">
          <CardTitle className="">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="font-semibold text-[14px] text-stone-500">{post.author?.name}</span>
          <time dateTime={post.createdAt.toDateString()}>
            <span className="ml-2 text-[12px] text-stone-500">{format(dateFnsDate, 'MM월 dd일 HH:mm')}</span>
          </time>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostingPost;
