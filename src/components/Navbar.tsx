import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { getAuthSession } from '@/lib/auth';

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="w-full flex flex-col items-center">
      {!session?.user ? (
        <div className="w-fit  flex items-center gap-2 ">
          <Link
            href="/auth/signup"
            className={cn(buttonVariants({ variant: 'default', size: 'sm' }), 'bg-[#678baf] hover:bg-[#3c5772] w-fit')}
          >
            Go to Sign Up
          </Link>
          <Link
            href="/auth/signin"
            className={cn(buttonVariants({ variant: 'default', size: 'sm' }), 'bg-[#678baf] hover:bg-[#3c5772] w-fit')}
          >
            Go to Sign In
          </Link>
        </div>
      ) : (
        <Link
          href="/auth/signout"
          className={cn(buttonVariants({ variant: 'default', size: 'sm' }), 'bg-[#678baf] hover:bg-[#3c5772]')}
        >
          Go to Sign Out
        </Link>
      )}
    </div>
  );
};

export default Navbar;
