import Footer from "@/components/sections/footer/Footer";
import Navbar from "@/components/sections/Header";
import Hero from "@/components/sections/heroSection/HeroSection3";
import Products from "@/components/sections/products/Products";
import ServiceShowcase from "@/components/sections/products/Services";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen text-primary-black w-full relative">
      {/* Dynamic Navbar */}
      <header>
        <Navbar />
      </header>
      <main className="grow pb-12">
        <Hero />
        <Products />

        <ServiceShowcase />
      </main>
      <Footer />
    </div>
  );
}
