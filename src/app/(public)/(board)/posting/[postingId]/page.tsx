import BackButton from '@/components/posting/BackButton';
import ButtonAction from '@/components/posting/ButtonAction';
import { db } from '@/lib/prisma';
import dompurify from 'dompurify';
import { FC } from 'react';
import { sanitize, isSupported } from 'isomorphic-dompurify';
import DOMPurify from 'isomorphic-dompurify';
import { format } from 'date-fns';

interface DetailPostPageProps {
  params: {
    postingId: string;
  };
}

const DetailPostPage: FC<DetailPostPageProps> = async ({ params }) => {
  const post = await db.post.findFirst({
    where: {
      id: params.postingId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      author: true,
    },
  });

  //@ts-ignore
  const dateFnsDate = new Date(post?.createdAt);

  return (
    <div>
      <BackButton />
      <div className="mb-8 mx-8">
        <ButtonAction postingId={params.postingId} />
        <main className="mb-8">
          <h2 className="text-4xl font-bold my-4">{post?.title}</h2>
          <div>
            <span className="font-semibold text-[14px] text-stone-500">{post?.author?.name} •</span>
            <time dateTime={post?.createdAt.toDateString()}>
              <span className="ml-1 text-[12px] text-stone-500">{format(dateFnsDate, 'MM.dd HH:mm')}</span>
            </time>
          </div>
        </main>
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
