import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/prisma';
import { GuestBookDeleteValidator } from '@/lib/validators/guestbook';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function DELETE(req: Request, { params }: { params: { postingId: string } }) {
  try {
    const session = await getAuthSession();

    if (!session?.user || session?.user.name !== 'pado') {
      return new Response('관리자 외 삭제 불가!', { status: 401 });
    }

    const id = params.postingId;

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

    return new Response('게시글을 삭제할 수 없습니다.', { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { postingId: string } }) {
  try {
    const session = await getAuthSession();
    const body = await req.json();

    if (!session?.user || session?.user.name !== 'pado') {
      return new Response('관리자 외 수정 불가!', { status: 401 });
    }

    const id = params.postingId;

    if (!id) return new Response(`${id}`, { status: 402 });

    await db.post.update({
      where: {
        id: id,
      },
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json({ message: 'update success' }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response('게시글을 수정할 수 없습니다.', { status: 500 });
  }
}

export async function GET(req: Request, { params }: { params: { postingId: string } }) {
  try {
    const post = await db.post.findFirst({
      where: {
        id: params.postingId,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response('게시글을 가져올 수 없습니다.', { status: 500 });
  }
}
