import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { getAuthSession } from '@/lib/auth';
import UserAccountNav from './UserAccountNav';
import { ModeToggle } from '../ModeToggle';
import { Home, MenuIcon } from 'lucide-react';
import SideBar from './SideBar';

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="fixed top-0 inset-x-0 h-14 bg-neutral-100 dark:bg-neutral-800 border-b border-zinc-300 dark:border-neutral-700 z-[10] py-2 sm:flex justify-center">
      <div className="conatiner flex items-center justify-between max-w-7xl w-full h-full">
        <Link href="/" className="flex gap-2 items-center ml-4">
          <Home className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
          <p className="hidden md:block text-zinc-700 dark:text-zinc-300 text-sm font-bold ">SEODONG</p>
        </Link>

        {/* TODO: Search Bar */}
        <div>Search Bar</div>

        {!session?.user ? (
          <div className="w-fit flex items-center gap-2 mr-2">
            {/* <Link
              href="/auth/signup"
              className={cn(
                buttonVariants({ variant: 'default', size: 'sm' }),
                'bg-[#678baf] hover:bg-[#3c5772] w-fit'
              )}
            >
              Go to Sign Up
            </Link> */}
            <Link
              href="/auth/signin"
              className={cn(
                buttonVariants({ variant: 'default', size: 'sm' }),
                'bg-lime-800 hover:bg-lime-700 dark:bg-lime-200 dark:hover:bg-lime-300 w-fit'
              )}
            >
              Go to Sign In
            </Link>
            <ModeToggle />
          </div>
        ) : (
          <div className="flex items-center">
            <div className="hidden w-fit md:flex items-center gap-2 mr-4">
              <ModeToggle />
              <UserAccountNav user={session.user} />
            </div>
            <div className="flex md:hidden items-center">
              <SideBar show={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
