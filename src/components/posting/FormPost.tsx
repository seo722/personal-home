'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';
import { PostingRequest, PostingValidator } from '@/lib/validators/posting';
import { FormInputPost } from '@/types';
import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<PostingRequest>({
    resolver: zodResolver(PostingValidator),
  });

  function handleChange(value: string) {
    console.log(value);
    //register로 등록하지 않고, 강제로 값을 넣어주는 기능 !!
    setValue('description', value === '<p><br></p>' ? '' : value);
    //onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능 !!
    trigger('description');
  }

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }],
      ['link', 'image'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    'header',
    'font',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'image',
    'color',
  ];

  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center justify-center gap-5 mt-8">
        <Input
          {...register('title', { required: true })}
          className="w-5/6   dark:bg-stone-900 border-stone-200 dark:border-none transition duration-100 "
          placeholder="제목"
        />
        {/* <Textarea
          {...register('description', { required: true })}
          className="w-5/6 max-w-lg dark:bg-stone-900 border-stone-200 dark:border-none transition duration-100 "
          placeholder="내용을 입력해주세요."
        /> */}
        <ReactQuill
          onChange={handleChange}
          theme="snow"
          className="w-5/6  bg-white dark:bg-stone-900 border-stone-200 dark:border-none "
          modules={modules}
          formats={formats}
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
    </div>
  );
};

export default FormPost;
