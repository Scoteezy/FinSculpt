"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import { navLinks } from "../lib/constants";

const NavItems = ({className, linkClassName} : {className?: string, linkClassName?: string}) => {
  const pathname = usePathname();
  const t = useTranslations("sidebar");

  return (
    <ul className={`h-full  text-black  dark:text-primaryDarkTheme-400 ${className}`}>
      {navLinks.map((link) => {
        const isActive = "/" + pathname.split("/")[2] === link.route;


        return (
          <li
            className={`${
              isActive && "text-primary-400 dark:text-primaryDarkTheme-500"
            } p-medium-16 whitespace-nowrap  w-fit ${linkClassName}`}
            key={link.route}
          >
            <Link
              className="peer w-fit"
              href={link.route}>{t(link.label)}</Link>
            {!isActive ?(
              <div className="w-0 bg-dark dark:bg-primaryDarkTheme-500 h-[1px] peer-hover:w-full transition-all duration-500"></div>
            ):(
              <div className="w-full bg-dark dark:bg-primaryDarkTheme-500 h-[1px] transition-all duration-500"></div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
