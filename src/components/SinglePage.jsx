"use client"
import { HeroSection } from './HeroSection';
import { StockIndicator } from './StockIndicator';
import { Carousel } from './Carousel';
import { AboutUs } from './AboutUs';
import { Projects } from './Projects';
import { Products } from './Products';
import { Footer } from './Footer';
import Lenis from 'lenis';

export const SinglePage = () => {

  useEffect(()=> {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);


  return (
    <div
      className="flex flex-col items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)]"
    >
      <HeroSection />
      <Projects />
      <Products />
      <StockIndicator />
      <AboutUs />
      <Carousel />
      <Footer />
    </div>
  )
};