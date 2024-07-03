import { NavigationMenuBar } from "@/components/ShadcnNavbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import { Testimonial } from "@/components/home/Testimonial";
import Offer from "@/components/home/Offer";
import Partner from "@/components/home/Partner";

export default function DataProvision() {
  return (
    <div>
      <NavigationMenuBar />
      <Hero />
      <Impact />
      <Testimonial />
      <Offer />
      <Partner />
      <Footer />
    </div>
  );
}
