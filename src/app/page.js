"use client"
import { Intro } from "@/components/Intro";
import { SinglePage } from "@/components/SinglePage";
import { useState, useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(()=> {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return isMounted ? 
  <Intro toggle={()=> setIsMounted(false)} /> 
  :
  (
    <>
      <SinglePage />
    </>
  )
}