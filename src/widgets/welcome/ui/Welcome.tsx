
import { unica } from "@/src/shared";
const Welcome = () => {
  return (
    <section className="wrapper mt-14 lg:mt-20 xl:mt-24">
      <h2 className={`${unica.className} h2-regular text-primary-500`}>
        Welcome to FinSculpt!
      </h2>
      <h4 className="h4-medium max-w-[600px] mt-10">
        Monitoring your financial activities has never been so fun. Say goodbye
        to boring spreadsheets and hello to dynamic, engaging, and intelligent
        financial tracking!
      </h4>
    </section>
  );
};

export default Welcome;
