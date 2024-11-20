"use client";

import React, { useState } from "react";
import Container from "../container/Container";
import Links from "../links/Links";
import Search from "../search/Search";
import Button from "../button/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full py-4 fixed top-0 left-0 z-40 text-white bg-navbar">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <Link href="/">
              <div className="text-3xl font-bold font-protest-revolution uppercase">
                Bloo<span className="text-primary-500">code</span>
              </div>
            </Link>
          </div>
          <nav
            className={`flex-[3] w-[60%] lg:w-auto h-screen px-5 pt-[80px] lg:pt-0 lg:h-auto 
            flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 
            lg:gap-0 absolute lg:static top-0 bg-blue-300 
            lg:bg-transparent transition-all lg:transition-none duration-300 ${
              open ? "right-0" : "right-[-100%]"
            }`}
          >
            <Links setOpen={setOpen} />
            <div className="w-fit flex flex-col lg:flex-row lg:items-center gap-5">
              <Search />
              <Button variant="primary">Subscribe</Button>
            </div>
          </nav>
          <div
            className="lg:hidden text-white cursor-pointer z-10"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoMdClose size={25} /> : <RxHamburgerMenu size={25} />}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
