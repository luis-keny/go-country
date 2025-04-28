'use client';

import { useEffect, useMemo, useState } from 'react';

import { title, subtitle } from '@/components/primitives';
import {Skeleton} from "@heroui/skeleton";
import SearchInput from '@/components/search-input';
import { CardCountry } from '@/components/card-country';
import { Country } from '@/types/country';

import { CountryService } from '@/controllers/country-service';

export default function Home() {
  const [textSearch, setTextSearch] = useState<string>('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const filteredCountries = useMemo(() => {
    return countries
      .filter((country) => {
        const name = country.name.common.toLowerCase();
        return name.includes(textSearch.toLowerCase());
      })
      .sort((a, b) => a.name.common.localeCompare(b.name.common));
  }, [countries, textSearch]);
  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countrySrv = new CountryService();
        const res = await countrySrv.getAllCountries();
        setCountries(res.data as any|| []);
      } catch (err) {
        console.error("Error fetching countries:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries(); 
  },[])

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
      <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {
          isLoading
            ? Array.from({ length: 8 }, (_, index) => (
              <div className="w-auto flex items-center gap-3" key={index}>
                <div>
                  <Skeleton className="flex rounded-full w-12 h-12" />
                </div>
                <div className="w-36 flex flex-col gap-2">
                  <Skeleton className="h-3 w-3/5 rounded-lg" />
                  <Skeleton className="h-3 w-4/5 rounded-lg" />
                </div>
              </div>
            ))
            : filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <CardCountry
                  key={index}
                  country={country}
                  flag={country.flags.png}
                />
              ))
            ) : (
              <div className='col-span-4 text-3xl'>No countries found</div>
            )
      }
      </main>
    </section>
  );
}
