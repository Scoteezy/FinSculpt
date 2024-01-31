import Footer from "@/components/landing/FooterNav";
import Hero from "@/components/landing/Hero";
import Join from "@/components/landing/Join";
import Preview from "@/components/landing/Preview";
import Team from "@/components/landing/Team";
import Welcome from "@/components/landing/Welcome";
import { GeometrySpacing } from "@/components/shared/GeometrySpacing";



export default function Home () {
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
}
