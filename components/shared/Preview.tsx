import { unica } from "@/app/fonts";
import Image from "next/image";
import { GeometrySpacing } from "./GeometrySpacing";
const Preview = () => {
  return (
    <section className="mt-14 lg:mt-32 xl:mt-40 wrapper flex flex-col flex-center">
      <div className="flex w-full flex-col flex-center lg:flex-row-reverse lg:flex-between">
        <Image
          src="/assets/images/expenses-placeholder.png"
          alt="expenses-tracker-preview"
          width={358}
          height={358}
        />
        <div className="max-w-96 mt-10 lg:mt-0">
          <h4 className={`${unica.className} h4-medium text-primary-400`}>
            Expenses Tracker
          </h4>
          <p className="p-regular-16 mt-5 lg:mt-10 text-primary-400">
            Keep a keen eye on your cash with our exceptional expenses tracking
            system!
          </p>
        </div>
      </div>
      <div className="flex w-full mt-14 lg:mt-10 xl:mt-14 flex-col flex-center lg:flex-row lg:flex-between">
        <Image
          src="/assets/images/income_placeholder.png"
          alt="expenses-tracker-preview"
          width={470}
          height={300}
        />
        <div className="max-w-96 mt-10 lg:mt-0">
          <h4 className={`${unica.className} h4-medium text-primary-400`}>
            Income Monitor
          </h4>
          <p className="p-regular-16 mt-5 lg:mt-10 lg:max-w-[358px]   text-primary-400">
            Follow the inflow of your cash with our top-notch income monitor.
          </p>
        </div>
      </div>
      <GeometrySpacing
        type="type-light"
        marginTop=" mt-32 lg:mt-44"
        marginBottom="mb-32 lg:mb-44"
      />
      <div className="w-full my-24">
        <h4 className={`${unica.className}  h4-medium text-primary-400`}>
          Crypto Wallet
        </h4>
        <div className="flex flex-col  md:flex-row md:justify-between md:items-start md:mt-10">
          <p className="p-regular-16 mt-10 md:mt-0 max-w-[600px] md:mr-5 xl:mr-0">
            Integrate your crypto wallets and track their performance—crypto
            isn‘t the future, it‘s today.
          </p>
          <p className="p-regular-16 mt-10 md:mt-0 max-w-[600px]">
            Our system accurately portrays your crypto growth and losses, making
            your decision-making process that much easier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Preview;
