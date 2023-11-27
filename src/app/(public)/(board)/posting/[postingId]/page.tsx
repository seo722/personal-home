import BackButton from '@/components/posting/BackButton';
import ButtonAction from '@/components/posting/ButtonAction';
import { db } from '@/lib/prisma';
import dompurify from 'dompurify';
import { FC } from 'react';
import { sanitize, isSupported } from 'isomorphic-dompurify';
import DOMPurify from 'isomorphic-dompurify';

interface DetailPostPageProps {
  params: {
    postingId: string;
  };
}

const DetailPostPage: FC<DetailPostPageProps> = async ({ params }) => {
  console.log(params.postingId);

  const post = await db.post.findFirst({
    where: {
      id: params.postingId,
    },
    select: {
      id: true,
      title: true,
      description: true,
    },
  });

  return (
    <div>
      <BackButton />
      <div className="mb-8 mx-8">
        <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
        <ButtonAction postingId={params.postingId} />
        {post?.description && (
          <>
            <div
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post?.description) }}
              className="text-stone-700 dark:text-stone-300"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DetailPostPage;
