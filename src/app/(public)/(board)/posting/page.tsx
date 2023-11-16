import MiniCreatePost from '@/components/posting/MiniCreatePost';
import PostingFeed from '@/components/posting/PostingFeed';
import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/prisma';

const page = async () => {
  const session = await getAuthSession();
  const posts = await db.post.findMany({
    where: {
      board: {
        name: 'posting',
      },
    },
    include: { board: true, author: true },
  });

  const admin = session?.user.name === 'pado' || 'Seu Park';

  return (
    <div className="mt-8 flex flex-col items-center gap-8">
      {session && admin && <MiniCreatePost session={session} />}

      {posts.length === 0 ? <div>게시글이 없습니다.</div> : <PostingFeed posts={posts} />}
    </div>
  );
};

export default page;
