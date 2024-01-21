import Image from "next/image";
import { unica } from "@/app/fonts";
const Team = () => {
  return (
    <section className="wrapper py-40 flex-center">
      <div className="flex flex-col flex-center">
        <Image
          src="/assets/images/denis-avatar.jpg"
          alt="denis-avatar"
          width={80}
          height={80}
          className="rounded-full grayscale ml-1"
        />
        <p
          className={`${unica.className} p-regular-20 text-center text-black mt-5 `}
        >
          Denis
        </p>
        <p className="p-regular-16 text-center text-primary-400 mt-2">
          Full-stack developer
        </p>
      </div>
    </section>
  );
};

export default Team;
