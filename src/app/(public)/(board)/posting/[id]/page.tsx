import BackButton from '@/components/posting/BackButton';
import ButtonAction from '@/components/posting/ButtonAction';
import { db } from '@/lib/prisma';
import { FC } from 'react';

interface DetailPostPageProps {
  params: {
    id: string;
  };
}

const DetailPostPage: FC<DetailPostPageProps> = async ({ params }) => {
  const post = await db.post.findFirst({
    where: {
      id: params.id,
    },
    include: {
      author: true,
      board: true,
    },
  });

  return (
    <div className="">
      <BackButton />
      <div className="mb-8 mx-8">
        <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
        <ButtonAction />
        <p className="text-stone-700 dark:text-stone-300">{post?.description}</p>
      </div>
    </div>
  );
};

export default DetailPostPage;
