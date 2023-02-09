import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center gap-10 bg-gradient-to-r from-[#ffffff20] via-slate-400 to-slate-300 h-14">
      <Link href="/">
        <h1 className="cursor-pointer">Home</h1>
      </Link>
      <Link href="/about">
      <h1>About</h1>
      </Link>
      <Link href="/Contact">
        <h1>Contact</h1>
      </Link>
      <Link href="/todo">
        <h1>My Todo</h1>
      </Link>
      <Link href="/meetup">
        <h1>Meetup</h1>
      </Link>
    </header>
  );
};

export default Header;
