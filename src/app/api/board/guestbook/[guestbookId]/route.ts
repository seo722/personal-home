import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/prisma';
import { GuestBookDeleteValidator } from '@/lib/validators/guestbook';
import { z } from 'zod';

export async function DELETE(req: Request, { params }: { params: { guestbookId: string } }) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response('로그인 후 삭제 가능합니다.', { status: 401 });
    }

    const id = params.guestbookId;

    if (!id) return new Response(`${id}`, { status: 402 });

    await db.post.delete({
      where: {
        id: id,
      },
    });

    return new Response('OK');
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response('방명록을 삭제할 수 없습니다.', { status: 500 });
  }
}
