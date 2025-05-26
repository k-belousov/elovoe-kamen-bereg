
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Rooms from '@/components/Rooms';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import TelegramWidget from '@/components/TelegramWidget';
import Contacts from '@/components/Contacts';
import MapPlaceholder from '@/components/MapPlaceholder';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingNavButton from '@/components/FloatingNavButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Rooms />
        <Services />
        <Reviews />
        <TelegramWidget />
        <MapPlaceholder />
        <Contacts />
        <FAQ />
      </main>
      <Footer />
      <FloatingNavButton />
    </div>
  );
};

export default Index;
