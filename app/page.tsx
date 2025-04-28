'use client';

import { useState } from 'react';

import { title, subtitle } from '@/components/primitives';
import SearchInput from '@/components/search-input';

export default function Home() {
  const [textSearch, setTextSearch] = useState<string>('');

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Discover the countries</span>
        <br />
        <span className={title()}>of the&nbsp;</span>
        <span className={title({ color: 'violet' })}>world&nbsp;</span>
        <div className={subtitle({ class: 'mt-4' })}>
          made with rest country api with flags api
        </div>
      </div>
      <div className="w-full flex gap-2">
        <SearchInput
          placeholder="Search by name"
          textCallback={setTextSearch}
        />
      </div>
    </section>
  );
}
