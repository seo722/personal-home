import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { getAuthSession } from '@/lib/auth';
import UserAccountNav from './UserAccountNav';
import { ModeToggle } from '../ModeToggle';

const Navi = async () => {
  const session = await getAuthSession();

  return (
    <div className="sm:hidden fixed top-0 inset-x-0 h-14 bg-neutral-100 dark:bg-neutral-800 border-b border-zinc-300 dark:border-neutral-700 z-[10] py-2 flex justify-center">
      {!session?.user ? (
        <div className="w-fit flex items-center gap-2 ">
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
        <div className="w-fit flex items-center gap-2 mr-4">
          <UserAccountNav user={session.user} />
          <ModeToggle />
        </div>
      )}
    </div>
  );
};

export default Navi;
