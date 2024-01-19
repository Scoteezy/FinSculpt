import Footer from "@/components/shared/FooterNav";
import { GeometrySpacing } from "@/components/shared/GeometrySpacing";
import Hero from "@/components/shared/Hero";
import Join from "@/components/shared/Join";
import Preview from "@/components/shared/Preview";
import Team from "@/components/shared/Team";
import Welcome from "@/components/shared/Welcome";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Preview />
      <Team />
      <GeometrySpacing
        type="type-dark"
        marginTop="mt-32 lg:mt-44"
        marginBottom="mb-32 lg:mb-44"
      />
      <Join />
      <Footer />
    </>
  );
}
