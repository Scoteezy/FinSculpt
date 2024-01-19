import Image from "next/image";
import { unica } from "@/app/fonts";
const Hero = () => {
  return (
    <section className="bg-black p-5 lg:p-12 xl:p-24">
      <div className="wrapper  flex-center flex-col">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={220}
          height={220}
        />
        <h1
          className={`${unica.className} h1-regular mt-12 text-white text-unica text-center `}
        >
          Revolutionize your <br />
          <span className="px-5 mt-5 inline-block  py-2 bg-white  text-black rounded-xl">
            Financial life!{" "}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
