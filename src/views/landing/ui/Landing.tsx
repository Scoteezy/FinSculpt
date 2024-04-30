import { GeometrySpacing } from "@/src/shared/ui";

import Footer from "./FooterNav";
import Hero from "./Hero";
import Join from "./Join";
import LocaleButton from "./LocaleButton";
import Preview from "./Preview";
import Team from "./Team";
import Welcome from "./Welcome";


const Landing = () => {
  return (
    <>
      <LocaleButton/>
      <Hero />
      <Welcome />
      <Preview />
      <Team />
      <GeometrySpacing
        marginBottom="mb-32 lg:mb-44"
        marginTop="mt-32 lg:mt-44"
        type="type-dark"
      />
      <Join />
      <Footer />
    </>
  );
};

export default Landing;