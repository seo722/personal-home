'use client';

import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Scrolled = () => {
  const [scroll, setScroll] = useState(0);

  const scrollFn = () => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        setScroll(window.scrollY);
      });
    }
  };

  useEffect(() => scrollFn());

  const gotoTop = () => {
    if (typeof window !== undefined) {
      document.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      });
    }
  };

  return (
    <div className={cn('fixed bottom-2 right-2 hidden', scroll && 'block')}>
      <div onClick={gotoTop}>
        <ChevronUp className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Scrolled;
