import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/prisma';

import { z } from 'zod';

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response('로그인 후 작성 가능합니다.', { status: 401 });
    }

    return new Response('OK');
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response('Could not create guestbook', { status: 500 });
  }
}
