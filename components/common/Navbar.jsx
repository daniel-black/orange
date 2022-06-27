import React from "react";
import Link from "next/link";

const Navbar = () => {


  return (
    <nav className="flex justify-between text-2xl">
      <div>
        <Link href="/">
          <a>I Wish That</a>
        </Link>
      </div>
      <ul className="flex">
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>
    </nav>
  );
}

export default Navbar;