import GuestBookFeed from '@/components/guestbook/GuestBookFeed';
import GuestBookInput from '@/components/guestbook/GuestBookInput';

const page = () => {
  //const guestbook = board?.filter((board) => board.name === 'guestbook');

  // const posts = await db.post.findMany({
  //   where: {
  //     board: {
  //       name: 'guestbook',
  //     },
  //   },
  //    orderBy: {
  //     createdAt: 'desc',
  //   },
  //   include: {},
  // });

  return (
    <div className="mt-12 flex flex-col items-center gap-8">
      <div className="w-[340px] h-[100px] border-2 border-black/60 dark:border-white/70 text-center rounded-xl flex flex-col justify-around items-center p-3">
        <p className="font-semibold">동의 방명록~!~!</p>
        <p className="text-stone-500 dark:text-stone-400 text-sm">자유롭게 써주세용 &gt;.&lt;</p>
      </div>
      <GuestBookInput />
      <GuestBookFeed />
    </div>
  );
};

export default page;
