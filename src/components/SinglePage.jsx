import { HeroSection } from './HeroSection';
import StockIndicator from './StockIndicator';
import { motion } from 'framer-motion';
import { Carousel } from './Carousel';
import { AboutUs } from './AboutUs';
import { Options } from './Options';
import { Projects } from './Projects';

export const SinglePage = () => {

  return (
    <div
      className="flex flex-col items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)]"
    >
      <HeroSection />
      <Projects />
      <AboutUs />
      <StockIndicator />
      <Carousel />
      {/* <Options /> */}

    </div>
  )
};