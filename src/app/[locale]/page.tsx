import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);

  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Skills />
        <Portfolio />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
