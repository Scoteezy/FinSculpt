
import { GeometrySpacing } from "@/src/shared";
import { Footer, Hero, Join, Preview, Team, Welcome } from "@/src/widgets";
const Landing = () => {
  return (
    <>
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