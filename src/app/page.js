"use client"
import { SinglePage } from "@/components/SinglePage";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {

  useEffect(()=> {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return <SinglePage />
}