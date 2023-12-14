'use client';
import React from 'react';
import { Search } from 'lucide-react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { SearchValue } from '@/lib/type';

const SearchBar = () => {
  // registrar valor del form sin useState, se delcara el tipo de lo que solo se usaria en el form en este caso {search:string}
  const { handleSubmit, register } = useForm<SearchValue>();
  // Hook que ya trae next para buscar por params de la url
  const searchParams = useSearchParams();
  // metodo para reemplazar params de la url
  const { replace } = useRouter();
  // saber el pathanme en el que estamos
  const pathname = usePathname();

  const handleSearchButton: SubmitHandler<SearchValue> = (
    value: SearchValue
  ) => {
    const params = new URLSearchParams(searchParams);
    params.set('q', value.search);
    // invocar el metodo/funcion
    replace(`${pathname}?${params}`);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSearchButton)}
      className="flex items-center gap-2 mr-2"
    >
      <Search />
      <input
        className="p-2 rounded-lg"
        {...register('search')}
        type="text"
        placeholder="Buscar por nombre ..."
        // onChange={handleSearch}
      />
      <Button type="submit">Buscar</Button>
    </form>
  );
};

export default SearchBar;
