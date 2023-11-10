'use client';

import { FC, useState } from 'react';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { Icons } from '../Icons';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

interface GoogleLoginProps extends React.HTMLAttributes<HTMLDivElement> {}

const GoogleLogin: FC<GoogleLoginProps> = ({ className, ...props }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn('google');
    } catch (error) {
      //toast notification
      toast({
        title: 'There was a problem.',
        description: 'There was an error logging in with Google',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button
        onClick={loginWithGoogle}
        size="sm"
        className="transition ease-in-out duration-300 bg-gradient-to-r to-[#F9FCFF] from-[#DEE4EA] rounded-full w-5/6 sm:w-[320px] h-[49px] text-base text-stone-500 mb-5 hover:text-stone-700 font-bold"
      >
        {isLoading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : <Icons.google className="w-4 h-4 mr-2" />}
        Google
      </Button>
    </div>
  );
};

export default GoogleLogin;
