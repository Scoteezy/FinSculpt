import Footer from "@/components/landing/FooterNav";
import { GeometrySpacing } from "@/components/shared/GeometrySpacing";
import Hero from "@/components/landing/Hero";
import Join from "@/components/landing/Join";
import Preview from "@/components/landing/Preview";
import Team from "@/components/landing/Team";
import Welcome from "@/components/landing/Welcome";

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
