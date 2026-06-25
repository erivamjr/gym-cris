import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Plans from "@/components/Plans";
import Team from "@/components/Team";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "Cris Academia",
  url: "https://crisacademia.netlify.app",
  image: "https://crisacademia.netlify.app/og-preview.jpg",
  logo: "https://crisacademia.netlify.app/logo-banner.png",
  telephone: "+55 91 99254-3958",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Floriano Peixoto, 457",
    addressLocality: "Portel",
    addressRegion: "PA",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "20:30",
    },
  ],
  sameAs: ["https://instagram.com/_crisacademia"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <Plans />
          <Team />
          <Gallery />
          <Location />
          <Faq />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
