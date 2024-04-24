import { Theme } from "@/src/features/theme";
import { NavItems, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/src/shared/ui";
import {Hamburger} from "@/src/shared/ui";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
const Navigation = () => {
  return (
    <nav className="mx-5 rounded-lg bg-secondary-500 dark:bg-primaryDarkTheme-500/50  drop-shadow-xl
    lg:h-[95vh]
    lg:w-44   
     lg:pt-12 my-5 lg:my-auto">
      <div className="hidden sm:flex items-center lg:flex-col justify-evenly lg:justify-normal">
        <div className=" gap-10 flex-center">
          <UserButton afterSignOutUrl="/"/>
          <Theme/>
        </div>
        <NavItems className="flex lg:flex-col sm:gap-6 md:gap-12 lg:gap-0 gap-0 "
          linkClassName="my-5 lg:my-0 lg:mt-12"/>
      </div>
      <div className=" flex sm:hidden justify-between items-center px-2">
        <div className="flex gap-5 items-center bg-primaryDarkTheme-400 dark:bg-primaryDarkTheme-500/50  drop-shadow-xl my-1 px-2 rounded-lg">  
          <Image alt='logo'
            height={52}
            src='/assets/images/logo.png'
            width={52}
          />
          <Theme/>
          <p>lang</p>
        </div>
        <Sheet>
          <SheetTrigger>
            <Hamburger height={32}
              width={32}/>
          </SheetTrigger>
          <SheetContent className="bg-secondary-500 dark:bg-primaryDarkTheme-500/70 dark:border-secondaryDarkTheme-500">
            <SheetHeader>
              <SheetTitle className="mb-1 flex items-center gap-5">
                <UserButton afterSignOutUrl="/"/>

                FinSculpt 
              </SheetTitle>
              <NavItems className="flex flex-col"
                linkClassName=" mt-12"/>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      

    </nav>
  );
};

export default Navigation;