import React from 'react';
import '../../App.css';
import { InfoSection } from '../sections';
import { HomeDataOne, HomeDataThree, HomeDataTwo } from '../data/HomeData';
import { TestimonialSection } from '../sections'
import HeroVidSection from '../sections/HeroSection/HeroVidSection';

const Home = () => {

    return (
        <>
        <HeroVidSection />
        <InfoSection {...HomeDataOne} />
        <InfoSection {...HomeDataTwo} />
        <InfoSection {...HomeDataThree} />
        <TestimonialSection/>
        </>
    );
}

export default Home;