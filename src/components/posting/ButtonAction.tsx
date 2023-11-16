import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import { Pencil, Trash2 } from 'lucide-react';

const ButtonAction = () => {
  return (
    <div>
      <Link
        href="/posting/edit/1"
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'mr-2 bg-stone-200 hover:bg-stone-300 border-none dark:bg-stone-600 dark:hover:bg-stone-700'
        )}
      >
        <Pencil className="h-4 w-4 mr-2" />
        수정
      </Link>
      <Button variant="outline" className="bg-rose-500 hover:bg-rose-600 border-none">
        <Trash2 className="h-4 w-4 mr-2" />
        삭제
      </Button>
    </div>
  );
};

export default ButtonAction;
