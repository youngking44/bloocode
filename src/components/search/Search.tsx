"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (search: string) => {
    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set("query", search);
    } else {
      params.delete("query");
    }

    router.replace(`${pathname}?${params.toString()}#trending`);
  };

  return (
    <form
      className="px-2 py-1 rounded-full flex items-center 
      gap-2 bg-primary-500"
    >
      <div className="cursor-pointer">
        <IoSearch size={20} />
      </div>

      <input
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        className="w-[120px] px-2 py-[6px] rounded-full bg-transparent placeholder:text-white"
      />
    </form>
  );
};

export default Search;
