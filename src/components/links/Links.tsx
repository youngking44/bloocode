"use client";

import React, { useState } from "react";
import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Explore",
    path: "explore",
  },
  {
    id: 2,
    title: "Trending",
    path: "trending",
  },
  {
    id: 3,
    title: "Upcoming",
    path: "upcoming",
  },
  {
    id: 4,
    title: "Watchlist",
    path: "watchlist",
  },
];

interface LinksProps {
  setOpen: (val: boolean) => void;
}

const Links = ({ setOpen }: LinksProps) => {
  const [active, setActive] = useState("explore");

  return (
    <div>
      <ul className="w-fit text-xl lg:text-base flex flex-col lg:flex-row lg:items-center gap-5">
        {links.map((link) => (
          <li
            key={link.id}
            className="relative font-[500] before:content-[''] before:w-full before:h-1 before:absolute 
              before:bottom-[-8px] before:left-0 before:bg-primary-500 before:scale-x-0 
              before:origin-left before:transition-all before:duration-300 before:hover:scale-x-75"
            onClick={() => setOpen(false)}
          >
            <Link
              href={`#${link.path}`}
              className={link.path === active ? "text-primary-500" : ""}
              onClick={() => setActive(link.path)}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
