import { db } from '@/lib/prisma';

const GuestBookFeed = async () => {
  const posts = await db.post.findMany({
    where: {
      board: {
        name: 'guestbook',
      },
    },
    include: { board: true },
  });

  return (
    <div>
      <div>
        {posts?.map((post) => (
          //@ts-ignore
          <div key={post.id}>{post?.description}</div>
        ))}
      </div>
    </div>
  );
};

export default GuestBookFeed;
