import SignInForm from '@/components/auth/SignInForm';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Home } from 'lucide-react';
import Link from 'next/link';

const SignInPage = () => {
  return (
    <div
      className="w-full h-full absolute flex flex-col gap-4 items-center p-8 mt-8 sm:mt-4
    "
    >
      <SignInForm />
      {/* <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: 'outline',
            size: 'sm',
            className:
              ' border border-[#8c9192] transition ease-in-out duration-300 bg-[#DEE4EA] hover:bg-[#cbd0d4] rounded-full h-12 w-12 text-base mb-5 text-[#545d5f] px-4',
          }),
          'absolute top-5 border-[#8c9192] w-fit'
        )}
      >
        <Home className="w-4 h-4" />
      </Link> */}
    </div>
  );
};

export default SignInPage;
