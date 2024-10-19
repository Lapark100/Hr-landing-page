import AboutUs from "@/components/about-us";
import CallToAction from "@/components/call-to-action";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Services from "@/components/services";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div>
    <main>
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
      <CallToAction />
      <Footer />
    </main>
    </div>
  );
}
