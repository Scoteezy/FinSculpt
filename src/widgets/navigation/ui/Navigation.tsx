import { Theme } from "@/src/features/theme";
import { NavItems } from "@/src/shared/ui";
import { UserButton } from "@clerk/nextjs";
const Navigation = () => {
  return (
    <nav className="h-[95vh] my-auto mx-5 rounded-lg bg-secondary-500 dark:bg-primaryDarkTheme-500/50 w-44 flex flex-col pt-12 items-center drop-shadow-xl">
      <div className="flex-center gap-10">
        <UserButton afterSignOutUrl="/" />
        <Theme/>
      </div>
      <NavItems/>
    </nav>
  );
};

export default Navigation;