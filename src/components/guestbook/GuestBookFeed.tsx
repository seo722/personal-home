import { Post } from '@prisma/client';
import GusetBookPost from './GuestBookPost';

interface PostProps {
  posts: Post[];
}

const GuestBookFeed = async ({ posts }: PostProps) => {
  // const posts = await db.post.findMany({
  //   where: {
  //     board: {
  //       name: 'guestbook',
  //     },
  //   },
  //   include: { board: true },
  // });

  return (
    <div className="border-2 rounded-xl sm:w-full max-w-[800px] w-[340px] border-black/60 dark:border-white/70 p-4 h-full ">
      <div className="h-full flex flex-col justify-around">
        {posts.map((post) => (
          <GusetBookPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default GuestBookFeed;
