import LandingLayout from "@/modules/landing/landing-layout";
import Header from "@/modules/landing/ui/header";
import Hero from "@/modules/landing/ui/hero";
import Pricing from "@/modules/landing/ui/pricing";

export default function Home() {
  return (
    <div className=" h-screen w-full">
      <LandingLayout>
         <Header />
         <Hero />
         <Pricing />
      </LandingLayout>
    </div>
  );
}
