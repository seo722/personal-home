'use client';

import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { GuestBookRequest, GuestBookValidator } from '@/lib/validators/guestbook';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { Separator } from '../ui/separator';
import { toast } from '@/hooks/use-toast';

const GuestBookInput = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GuestBookRequest>({
    resolver: zodResolver(GuestBookValidator),
    defaultValues: {
      name: '',
      // password: '',
      description: '',
    },
  });

  const { mutate: postGuestBook } = useMutation({
    mutationFn: async ({ description, name }: GuestBookRequest) => {
      const payload: GuestBookRequest = { description, name };
      const { data } = await axios.post('/api/board/guestbook', payload);
      return data;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return toast({
            title: '로그인 후 작성 가능합니다',
            variant: 'destructive',
          });
        }
      }
    },
    onSuccess: () => {
      reset({
        name: '',
        description: '',
        // password: '',
      });
      router.refresh();
    },
  });

  return (
    <div className="border-2 rounded-xl sm:w-full max-w-[800px] w-[340px] border-black/60 dark:border-white/70 p-4 ">
      <div className="">
        <form
          onSubmit={handleSubmit((e) => {
            postGuestBook(e);
          })}
        >
          <Textarea
            {...register('description')}
            className="dark:bg-stone-900 border-stone-200 dark:border-none focus:border-transparent focus:ring-0 transition duration-100 focus:outline-none"
            placeholder="동의에게 남기고 싶은 말 ><"
            rows={1}
          />
          <div className="flex justify-between sm:justify-end gap-2 items-center mt-2">
            {/* <label htmlFor="checkbox" />
            <input
              type="checkbox"
              id="checkbox"
              className="relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-black dark:border-white transition-all checked:border-black checked:bg-black dark:checked:bg-white"
            />

            <p className="text-[12px]">비밀글</p> */}
            <Input
              className="w-28 dark:bg-stone-900 border-stone-200 dark:border-none"
              placeholder="작성자"
              {...register('name')}
            />
            {/* <Input
              className="w-28 dark:bg-stone-900 border-stone-200 dark:border-none"
              placeholder="비밀번호"
              {...register('password')}
            /> */}
            <Button
              onSubmit={handleSubmit((e) => {
                postGuestBook(e);
              })}
              size="sm"
              variant="register"
              className="bg-stone-200 dark:bg-stone-800 h-[40px] rounded-full transition duration-200"
            >
              등록
            </Button>
          </div>
          {(errors.description || errors.name) && (
            <div className="flex flex-col gap-4 mt-4">
              {errors.description?.message}
              {errors.name && <Separator className="bg-stone-400 dark:bg-stone-600" />}
              {errors.name?.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default GuestBookInput;
