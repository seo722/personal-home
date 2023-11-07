import { z } from 'zod';

export const GuestBookValidator = z.object({
  name: z
    .string()
    .min(1, '이름 또는 닉네임을 작성해주세요.')
    .max(16)
    .regex(/^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ_]+$/),
  //password: z.string().min(4).max(16),
  description: z.string().min(1, '빈 칸을 채워주세요.'),
});

export type GuestBookRequest = z.infer<typeof GuestBookValidator>;
