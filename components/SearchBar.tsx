'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import SearchIcon from '../assets/icons/search.svg';
import XIcon from '../assets/icons/x.svg';
import { Button } from './ui/button';

interface SearchBarProps {
  windowWidth: 'sm' | 'xl';
}
export default function SearchBar({ windowWidth }: SearchBarProps) {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  console.log(windowWidth);
  return (
    <form
      action=""
      className={`xl:w-[395px] xl:-mt-3 xl:mr-auto ${
        showFullWidthSearch && windowWidth === 'sm'
          ? 'absolute inset-0 w-full h-full flex items-center px-2 pr-10 bg-white'
          : 'relative ml-auto'
      }`}
    >
      <Input
        className={`text-lg placeholder:text-black xl:w-full xl:py-2 xl:h-10 ${
          showFullWidthSearch
            ? 'w-full max-w-96 pl-14 '
            : 'w-12 h-8 text-transparent xl:text-black xl:pl-14'
        }`}
        placeholder={
          showFullWidthSearch || windowWidth === 'xl' ? 'Search' : ''
        }
      />
      {showFullWidthSearch || windowWidth === 'xl' ? (
        <>
          <Button
            type="button"
            variant={'ghost'}
            className="absolute left-4 top-1/2 -translate-y-1/2  p-0 h-auto hover:text-accent hover:bg-transparent"
          >
            <SearchIcon />
          </Button>
          {showFullWidthSearch && windowWidth === 'sm' && (
            <Button
              type="button"
              variant={'ghost'}
              className="absolute right-4 top-1/2 -translate-y-1/2  p-0 h-auto hover:text-accent hover:bg-transparent"
              onClick={() => setShowFullWidthSearch(false)}
            >
              <XIcon />
            </Button>
          )}
        </>
      ) : (
        <Button
          type="button"
          variant={'ghost'}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-full hover:text-accent hover:bg-transparent"
          onClick={() => setShowFullWidthSearch(!showFullWidthSearch)}
        >
          <SearchIcon />
        </Button>
      )}
    </form>
  );
}
