import React, { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import StickyMobileCTA from './components/layout/StickyMobileCTA';
import Hero from './components/sections/Hero';
import StatsBar from './components/sections/StatsBar';
import ScrollReveal from './components/ui/ScrollReveal';

// Lazy-loaded below-fold sections
const TrustBar = lazy(() => import('./components/sections/TrustBar'));
const FeaturesGrid = lazy(() => import('./components/sections/FeaturesGrid'));
const DashboardPreview = lazy(() => import('./components/sections/DashboardPreview'));
const HowItWorks = lazy(() => import('./components/sections/HowItWorks'));
const Pricing = lazy(() => import('./components/sections/Pricing'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const FAQ = lazy(() => import('./components/sections/FAQ'));
const FinalCTA = lazy(() => import('./components/sections/FinalCTA'));

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ScrollReveal><StatsBar /></ScrollReveal>
        <Suspense fallback={<div style={{ minHeight: 80 }} />}>
          <ScrollReveal><TrustBar /></ScrollReveal>
          <ScrollReveal><FeaturesGrid /></ScrollReveal>
          <ScrollReveal><DashboardPreview /></ScrollReveal>
          <ScrollReveal><HowItWorks /></ScrollReveal>
          <ScrollReveal><Pricing /></ScrollReveal>
          <ScrollReveal><Testimonials /></ScrollReveal>
          <ScrollReveal><FAQ /></ScrollReveal>
          <ScrollReveal><FinalCTA /></ScrollReveal>
        </Suspense>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

export default App;
