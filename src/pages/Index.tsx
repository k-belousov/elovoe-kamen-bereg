
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Rooms from '@/components/Rooms';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import News from '@/components/News';
import TelegramWidget from '@/components/TelegramWidget';
import MapPlaceholder from '@/components/MapPlaceholder';
import Contacts from '@/components/Contacts';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

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
        <News />
        <TelegramWidget />
        <MapPlaceholder />
        <Contacts />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
