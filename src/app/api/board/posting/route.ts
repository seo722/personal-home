import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/prisma';
import { PostingValidator } from '@/lib/validators/posting';

import { z } from 'zod';

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user || session?.user.name !== 'pado') {
      return new Response('관리자 외 작성불가!', { status: 401 });
    }

    const body = await req.json();
    //validation
    const { description, title } = PostingValidator.parse(body);

    await db.post.create({
      data: { description, title: title, authorId: session?.user.id, BoardId: '2' },
    });

    return new Response('OK');
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response('관리자 외 작성불가!', { status: 500 });
  }
}
