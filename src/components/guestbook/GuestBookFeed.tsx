import { Post } from '@prisma/client';
import GusetBookPost from './GuestBookPost';

interface PostProps {
  posts: Post[];
}

const GuestBookFeed = async ({ posts }: PostProps) => {
  return (
    <div className="border-2 rounded-xl sm:w-full max-w-[800px] w-[340px] border-black/60 dark:border-white/70 h-full">
      <div className="h-full grid grid-cols-1 divide-y justify-around p-4 divide-stone-300 dark:divide-stone-700">
        {posts.length === 0 && (
          <div className="h-full flex flex-col justify-center">
            <div className="text-stone-700 dark:text-stone-300">방명록을 남겨주세요!</div>
          </div>
        )}
        {posts.map((post) => (
          <GusetBookPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default GuestBookFeed;
