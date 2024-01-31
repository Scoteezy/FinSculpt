"use client";
import React from "react";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="h-full flex flex-col ">
      {navLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            className={`${
              isActive && "text-primary-400"
            } p-medium-16 whitespace-nowrap mt-12`}
            key={link.route}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
