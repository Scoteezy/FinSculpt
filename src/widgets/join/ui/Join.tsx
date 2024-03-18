import { unica } from "@/src/shared";
import { Button } from "@/src/shared";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const Join = () => {
  return (
    <section className="wrapper flex-center flex-col">
      
      <SignedIn>
        <h2 className={`${unica.className} h2-regular text-primary-400`}>
        You already signed in ! 
        </h2>
        <p className="p-regular-16 max-w-[500px] text-center text-primary-400 mt-5">
         Go ahead and take control of your financial destiny.
        </p>
        <Button className="mt-5 text-primary-500 transition-all duration-500 hover:text-[#c8b1e4] train bg-[#c8b1e4]">
          <Link href="/expenses">Start tracking</Link>
        </Button>
      </SignedIn>
      <SignedOut>
        <h2 className={`${unica.className} h2-regular text-primary-400`}>
        Join Us
        </h2>
        <p className="p-regular-16 max-w-[500px] text-center text-primary-400 mt-5">
        Ready to take control of your financial destiny? Don‘t sleep on it—your
        medium of financial tracking just got an upgrade!
        </p>
        <Button className="mt-5 text-primary-500 transition-all duration-500 hover:text-[#c8b1e4] train bg-[#c8b1e4]">
          <Link href="/sign-in">Sign Up Now</Link>
        </Button>
      </SignedOut>
      
    </section>
  );
};

export default Join;
