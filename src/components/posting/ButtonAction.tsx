'use client';

import axios from 'axios';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import { Pencil, Trash2 } from 'lucide-react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button, buttonVariants } from '@/components/ui/button';

const ButtonAction = ({ postingId }: { postingId: string }) => {
  const session = useSession();
  const router = useRouter();

  const { mutate: deletePosting } = useMutation({
    mutationFn: async () => {
      await axios.delete(`/api/board/posting/${postingId}`, {
        params: { postingId },
      });
    },
    onError: (err) => {
      console.log(err);
    },
    onSuccess: () => {
      router.refresh();
      router.push('/posting');
    },
  });

  return (
    <div>
      {session?.data?.user.name === 'pado' && (
        <div>
          <div className="hidden">
            <Link
              href={`/posting/edit/${postingId}`}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'mr-2 bg-stone-200 hover:bg-stone-300 border-none dark:bg-stone-600 dark:hover:bg-stone-700'
              )}
            >
              <Pencil className="h-4 w-4 mr-2" />
              수정
            </Link>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="bg-rose-500 hover:bg-rose-600 border-none">
                <Trash2 className="h-4 w-4 mr-2" />
                삭제
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader className="text-sm font-semibold">게시글을 삭제하시겠습니까?</AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>취소</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    deletePosting();
                  }}
                >
                  삭제
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </div>
  );
};

export default ButtonAction;
