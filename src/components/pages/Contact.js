import React from 'react';
import '../../App.css';
import { ContactHero } from '../data/PageHeroData';
import GoogleMap from '../GoogleMap';
import { ContactSection, HeroImgSection } from '../sections';


function Contact() {
  return (
  <>
    <HeroImgSection {...ContactHero} />
    <ContactSection />
    <GoogleMap />
  </>
  );
}

export default Contact;
