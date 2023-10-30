'use client';

import Link from 'next/link';
import GoogleLogin from './GoogleLogin';

const SignUpForm = () => {
  return (
    <div className="m-0 top-[50px] left-1/2 absolute text-center translate-x-[-50%] bg-[#f1f1f1] dark:bg-[#222222] rounded-[9px] w-5/6 h-auto sm:w-[400px]   drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] tracking-wide">
      <div className="flex flex-col items-center">
        <p className="text-[#1f1f1f] dark:text-[#f1f1f1] text-lg mt-10 sm:mt-[70px] font-bold ">
          세오동 홈페이지 &gt;.&lt;
        </p>
        <p className="text-sm text-zinc-800 dark:text-zinc-300 mt-1.5 sm:mt-[10px] mb-10 ">계정을 만들어 주세요.</p>
      </div>

      <GoogleLogin className="mb-4" />
      <p className="text-[12px] mb-10">
        이미 계정이 있으세요?{' '}
        <Link href="/auth/signin" className="underline cursor-pointer ">
          로그인
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
