import Footer from "@/components/Footer";
import { NavigationMenuBar } from "@/components/ShadcnNavbar";
import CollectionScoring from "@/components/main/Collection-Score";
import Conclusion from "@/components/main/Conclusion";
import CreditScoring from "@/components/main/Credit-Score";
import DebtCollection from "@/components/main/Debt-Collection";
import Decision from "@/components/main/Decision";
import Features from "@/components/main/Features";
import Hero from "@/components/main/Hero";
import Services from "@/components/main/Services";
import { WobbleCardDemo } from "@/components/main/Wobble";

export default function Home() {
  return (
    <main>
      <NavigationMenuBar />
      <Hero />
      <Services />
      <Decision />
      <CreditScoring />
      <CollectionScoring />
      <Features />
      <DebtCollection />
      <Conclusion />
      <Footer />
    </main>
  );
}
