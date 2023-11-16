'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { PostingRequest, PostingValidator } from '@/lib/validators/posting';
import { FormInputPost } from '@/types';
import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostingRequest>({
    resolver: zodResolver(PostingValidator),
  });

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center justify-center gap-5 mt-8">
      <Input
        {...register('title', { required: true })}
        className="w-5/6 max-w-lg dark:bg-stone-900 border-stone-200 dark:border-none transition duration-100 "
        placeholder="제목"
      />
      <Textarea
        {...register('description', { required: true })}
        className="w-5/6 max-w-lg dark:bg-stone-900 border-stone-200 dark:border-none transition duration-100 "
        placeholder="내용을 입력해주세요."
      />
      <Button
        variant="register"
        className="w-5/6 max-w-lg bg-stone-200 dark:bg-stone-800 border-stone-200 dark:border-none transition duration-200 "
      >
        {isEditing ? '수정' : '작성'}
      </Button>
      <div>{errors.title?.message}</div>
      <div>{errors.description?.message}</div>
    </form>
  );
};

export default FormPost;
