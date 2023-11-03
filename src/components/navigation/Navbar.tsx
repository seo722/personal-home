import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { getAuthSession } from '@/lib/auth';
import UserAccountNav from './UserAccountNav';
import { ModeToggle } from '../ModeToggle';
import { Home } from 'lucide-react';
import SideBar from './SideBar';
import Scrolled from '../scrolled';

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className=" fixed top-4 inset-x-0 h-14 z-[10] sm:flex justify-center px-4">
      <div className="conatiner bg-white dark:bg-stone-800 border-none flex items-center justify-between max-w-7xl w-full h-full rounded-full border-2 py-2 shadow-2xl ">
        <Link href="/" className="flex gap-2 items-center ml-4">
          <Home className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
          <p className="hidden md:block text-zinc-700 dark:text-zinc-300 text-sm font-bold ">SEODONG</p>
        </Link>

        {/* TODO: Search Bar */}
        <div>Search Bar</div>

        {!session?.user ? (
          <div className="w-fit flex items-center gap-2 mr-4">
            <Link
              href="/auth/signin"
              className={cn(
                buttonVariants({ variant: 'default', size: 'sm' }),
                'bg-lime-800 hover:bg-lime-700 dark:bg-lime-200 dark:hover:bg-lime-300 w-fit'
              )}
            >
              Sign In
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
      <Scrolled />
    </div>
  );
};

export default Navbar;
