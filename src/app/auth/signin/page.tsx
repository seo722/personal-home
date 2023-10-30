import SignInForm from '@/components/auth/SignInForm';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Home } from 'lucide-react';
import Link from 'next/link';

const SignInPage = () => {
  return (
    <div className="w-full h-full absolute flex flex-col gap-4 items-center p-8">
      <SignInForm />
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: 'outline',
            size: 'sm',
            className:
              ' border border-lime-200 transition ease-in-out duration-300 bg-[#849b5c] hover:bg-[#d1e6ad] rounded-full h-12 w-12 text-base hover:text-lime-800 mb-5 text-lime-100 px-4',
          }),
          'absolute top-5 border-lime-800 w-fit'
        )}
      >
        <Home className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default SignInPage;
