import { Post, Board, User } from '@prisma/client';
import PostingPost from './PostingPost';

interface PostProps {
  posts: Post[];
}

const PostingFeed = async ({ posts }: PostProps) => {
  return (
    <div className="w-full h-full grid grid-cols-1 divide-y justify-around p-4 divide-stone-300 dark:divide-stone-700 pb-10">
      {posts.length === 0 && (
        <div className="h-fit flex flex-col justify-center">
          <div className="text-stone-700 dark:text-stone-300">게시글을 남겨주세요!</div>
        </div>
      )}
      {posts.map((post) => (
        //@ts-ignore
        <PostingPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostingFeed;
