"use client";
import { HeroSection } from './HeroSection';
import { StockIndicator } from './StockIndicator';
import { Carousel } from './Carousel';
import { AboutUs } from './AboutUs';
import { Projects } from './Projects';
import { Products } from './Products';
import { Footer } from './Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Lenis from 'lenis';
import { getUserSession, getAdminSession } from '../../lib/lib';

export const SinglePage = () => {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis();
    let rafId

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const timer = setTimeout(async() => {
      const userSession = await getUserSession();
      const adminSession = await getAdminSession();
      if(!userSession && !adminSession) router.push('/userForm');
    }, 4000);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <Projects />
      <Products />
      <StockIndicator />
      <AboutUs />
      <Carousel />
      <Footer />
    </div>
  );
};