'use client';

import BackButton from '@/components/posting/BackButton';
import FormPost from '@/components/posting/FormPost';
import { toast } from '@/hooks/use-toast';
import { PostingRequest } from '@/lib/validators/posting';
import { FormInputPost } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {};

  const { mutate: submitPost } = useMutation({
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
      <h1 className="text-2xl my-4 font-bold text-center">Add new Post</h1>
      <FormPost submit={(e) => submitPost(e)} isEditing={false} />
    </div>
  );
};

export default CreatePage;
