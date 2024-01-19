import { unica } from "@/app/fonts";
import { Button } from "../ui/button";

const Join = () => {
  return (
    <section className="wrapper flex-center flex-col">
      <h2 className={`${unica.className} h2-regular text-primary-400`}>
        Join Us
      </h2>
      <p className="p-regular-16 max-w-[500px] text-center text-primary-400 mt-5">
        Ready to take control of your financial destiny? Don‘t sleep on it—your
        medium of financial tracking just got an upgrade!
      </p>
      <Button className="mt-5 text-primary-500 transition-all duration-500 hover:text-[#c8b1e4] train bg-[#c8b1e4]">
        Sign Up Now
      </Button>
    </section>
  );
};

export default Join;
