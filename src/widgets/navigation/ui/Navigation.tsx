import { NavItems } from "@/src/shared";
import { UserButton } from "@clerk/nextjs";
const Navigation = () => {
  return (
    <nav className="h-full bg-secondary-500 w-44 flex flex-col pt-12  items-center ">
      <UserButton afterSignOutUrl="/" />
      <NavItems/>
    </nav>
  );
};

export default Navigation;