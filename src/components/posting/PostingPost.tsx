'use client';

import { Post, User, Board } from '@prisma/client';

interface PostProps {
  post: Post & {
    author: User;
    board: Board;
  };
}

const PostingPost = ({ post }: PostProps) => {
  return (
    <div className="border-2 rounded-xl w-full max-w-[800px] border-black/60 dark:border-white/70 h-full">
      <div className="h-full grid grid-cols-1   justify-around p-4 divide-stone-300 dark:divide-stone-700">
        <div>{post.title}</div>
        <div>{post.description}</div>
        <div>{post.author?.name}</div>
      </div>
    </div>
  );
};

export default PostingPost;
