'use client';

import BackButton from '@/components/posting/BackButton';
import FormPost from '@/components/posting/FormPost';
import { toast } from '@/hooks/use-toast';
import { db } from '@/lib/prisma';
import { PostingRequest } from '@/lib/validators/posting';
import { FormInputPost } from '@/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';

interface EditPostPageProps {
  params: {
    postingId: string;
  };
}

const EditPostPage: FC<EditPostPageProps> = async ({ params }) => {
  const { postingId } = params;
  // console.log(postingId);

  const { data: postData } = useQuery({
    queryKey: ['posts', postingId],
    queryFn: async () => {
      const response = await axios.get(`/api/board/posting/${postingId}`);
      return response.data;
    },
  });
  console.log(postData);

  const { mutate: editPost } = useMutation({
    mutationFn: async ({ description, title }: PostingRequest) => {
      console.log({ description, title });
      //   const payload: PostingRequest = { description, title };
      //   const { data } = await axios.post('/api/board/posting', payload);
      //   return data;
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
      //   reset({
      //     title: '',
      //     description: '',
      //     // password: '',
      //   });
      //   router.refresh();
    },
  });

  return (
    <div>
      <BackButton />
      <h1 className="text-2xl my-4 font-bold text-center">Edit Post</h1>
      <FormPost submit={(e) => editPost(e)} isEditing />
    </div>
  );
};

export default EditPostPage;
