import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

import NavItems from "./NavItems";
const Navigation = () => {
  return (
    <nav className="h-full bg-secondary-500 w-44 flex flex-col pt-12  items-center ">
      <UserButton afterSignOutUrl="/" />
      <NavItems/>
    </nav>
  );
};

export default Navigation;