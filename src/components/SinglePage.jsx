"use client"
import { HeroSection } from './HeroSection';
import { StockIndicator } from './StockIndicator';
import { Carousel } from './Carousel';
import { AboutUs } from './AboutUs';
import { Projects } from './Projects';
import { Products } from './Products';
import { Footer } from './Footer';
import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import Lenis from 'lenis';
import { Modal } from './Modal';

export const SinglePage = ({ userSession }) => {
  const [isLogged, setIsLogged] = useState(false)

  
  
  useEffect(()=> {
  if(userSession) setIsLogged(true)
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);


  return (
    <>
      {
        isLogged?
      <div
        className="flex flex-col items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)]"
      >
        <Navbar />

        <HeroSection />
        <Projects />
        <Products />
        <StockIndicator />
        <AboutUs />
        <Carousel />
        <Footer />
      </div>:
      (userSession?'':<Modal clearModal={()=>setIsLogged(true)} />)
      }
    </>
  )
};