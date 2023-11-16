import { z } from 'zod';

export const PostingValidator = z.object({
  title: z.string().min(1, '제목을 입력해주세요.').max(36, '제목은 36자까지 입력 가능합니다.'),
  description: z.string().min(1, '내용을 입력해주세요.'),
});

export type PostingRequest = z.infer<typeof PostingValidator>;

export const GuestBookDeleteValidator = z.object({
  id: z.string(),
});

export type GuestBookDeleteRequest = z.infer<typeof GuestBookDeleteValidator>;
