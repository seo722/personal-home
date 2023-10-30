'use client';

import { signOut } from 'next-auth/react';
import { Button } from '../ui/button';

const SignOut = () => {
  const signOutFn = () => {
    signOut({
      callbackUrl: '/',
      redirect: true,
    });
  };

  return (
    <div className="m-0 top-[50px] left-1/2 absolute text-center translate-x-[-50%] bg-[#f1f1f1] dark:bg-[#222222] rounded-[9px] w-5/6 h-auto sm:w-[400px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] tracking-wide">
      <div className="flex flex-col items-center">
        <p className="text-[#1f1f1f] dark:text-[#f1f1f1] text-lg mt-10 sm:mt-[70px] font-bold ">
          세오동 홈페이지 &gt;.&lt;
        </p>
        <p className="text-sm text-zinc-800 dark:text-zinc-300 mt-1.5 sm:mt-[10px] mb-10 ">로그아웃 하시겠습니까?</p>
      </div>
      <Button
        onClick={signOutFn}
        size="sm"
        className="transition ease-in-out duration-300 bg-gradient-to-r to-[#849b5c] from-[#d1e6ad] rounded-full w-5/6 sm:w-[320px] h-[49px] text-base text-lime-800   hover:text-lime-100 mb-10"
      >
        Sign out
      </Button>
    </div>
  );
};

export default SignOut;
