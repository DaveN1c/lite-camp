import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyLiteCamp from "@/components/WhyLiteCamp";
import PhotoBanner from "@/components/PhotoBanner";
import Pricing from "@/components/Pricing";
import Program from "@/components/Program";
import Location from "@/components/Location";
import Included from "@/components/Included";
import ForParents from "@/components/ForParents";
import Reviews from "@/components/Reviews";
import TesimeSe from "@/components/TesimeSe";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyLiteCamp />
        <PhotoBanner />
        <Pricing />
        <Program />
        <Location />
        <Included />
        <ForParents />
        <Reviews />
        <TesimeSe />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
