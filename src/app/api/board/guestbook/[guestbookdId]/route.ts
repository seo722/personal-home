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

    const gbId = params.guestbookId;

    const body = await req.json();
    //validation
    const { id } = GuestBookDeleteValidator.parse(body);

    await db.post.delete({
      where: {
        id: params.guestbookId,
      },
    });

    return new Response('OK');
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response('Could not delete guestbook', { status: 500 });
  }
}
