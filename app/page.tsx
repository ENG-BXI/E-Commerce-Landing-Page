'use client';
import Header from './_Components/Header';
import HeroSection from './_Components/HeroSection';
import StatisticsSection from './_Components/StatisticsSection';
import WhyUsSection from './_Components/WhyUsSection';
import BannerSection from './_Components/BannerSection';
import SubscriptionSection from './_Components/SubscriptionSection';
import ProductsSection from './_Components/ProductsSection';
import {useEffect, useRef} from 'react';
import ReactLenis, {LenisRef} from 'lenis/react';
import gsap from 'gsap';
import Footer from './_Components/footer';

export default function Page() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 500);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <ReactLenis root options={{autoRaf: false}} ref={lenisRef}>
      <main className='container mx-auto px-2'>
        <Header />
        <HeroSection />
        <StatisticsSection />
        <ProductsSection />
        <WhyUsSection />
        <BannerSection />
        <SubscriptionSection />
      </main>
      <Footer />
    </ReactLenis>
  );
}
