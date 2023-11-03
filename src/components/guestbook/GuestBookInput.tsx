'use client';

import { useEffect, useState } from 'react';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Check, ChevronDown } from 'lucide-react';

const GuestBookInput = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="border-2 rounded-xl sm:w-full w-[340px] border-black/60 dark:border-white/70 p-4 ">
      <div>
        <Textarea
          value={value}
          className="dark:bg-stone-900 border-none focus:border-transparent focus:ring-0"
          placeholder="동의에게 남기고 싶은 말 ><"
          rows={1}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex justify-between sm:justify-end gap-2 items-center mt-2">
          <label htmlFor="checkbox" />
          <input
            type="checkbox"
            id="checkbox"
            className="relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-black dark:border-white transition-all checked:border-black checked:bg-black dark:checked:bg-white"
          />

          <p className="text-[12px]">비밀글</p>
          <Input className="w-28 dark:bg-stone-900 border-none" placeholder="작성자" />
          <Input className="w-28 dark:bg-stone-900 border-none" placeholder="비밀번호" />
        </div>
      </div>
    </div>
  );
};

export default GuestBookInput;
