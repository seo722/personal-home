'use client';

import { ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="ml-8 mb-8 mt-4">
      <Button
        variant="outline"
        className="bg-stone-200 hover:bg-stone-300 border-none dark:bg-stone-600 dark:hover:bg-stone-700"
        onClick={() => router.back()}
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        뒤로가기
      </Button>
    </div>
  );
};

export default BackButton;
