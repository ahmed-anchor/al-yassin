import { HeroSection } from './HeroSection';
import StockIndicator from './StockIndicator';
import { motion } from 'framer-motion';
import { Carousel } from './Carousel';
import { AboutUs } from './AboutUs';
import { Options } from './Options';
import { Projects } from './Projects';

export const SinglePage = () => {

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: .6, ease: 'easeIn'}}
    className="flex flex-col items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)]"
    >
      <HeroSection />
      <StockIndicator />
      {/* <Options /> */}
      <Carousel />
      <AboutUs />
      <Projects />

    </motion.div>
  )
};