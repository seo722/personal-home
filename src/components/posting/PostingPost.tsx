'use client';

import { Post, User, Board } from '@prisma/client';
import { useRouter } from 'next/navigation';

interface PostProps {
  post: Post & {
    author: User;
    board: Board;
  };
}

const PostingPost = ({ post }: PostProps) => {
  const router = useRouter();
  return (
    <div className="border-2 rounded-xl w-full max-w-[800px] border-black/60 dark:border-white/70 h-fit">
      <div
        className="h-full grid grid-cols-1 divide-y justify-around p-4 divide-stone-300 dark:divide-stone-700 hover:cursor-pointer"
        onClick={() => {
          router.push(`/posting/${post.id}`);
        }}
      >
        <div>{post.author?.name}</div>
        <div>{post.title}</div>
        <div>{post.description}</div>
      </div>
    </div>
  );
};

export default PostingPost;
