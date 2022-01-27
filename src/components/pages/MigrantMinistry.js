import React from 'react';
import { MigrantMinstryDataOne, MigrantMinstryDataThree, MigrantMinstryDataTwo, MigrantMinstryDataFour} from '../data/MigrantMinistryData';
import { MMHero } from '../data/PageHeroData';
import { HeroImgSection, InfoSection } from '../sections';
import MigrantMinistrySection from '../sections/MigrantMinistrySection/MigrantMinistrySection';
import PhotoSection from '../sections/PhotoSection/PhotoSection';


function MigrantMinstry() {
    return (
    <>
    <HeroImgSection {...MMHero} />
    <MigrantMinistrySection {...MigrantMinstryDataOne}/>
    <MigrantMinistrySection {...MigrantMinstryDataTwo}/>
    <MigrantMinistrySection {...MigrantMinstryDataThree}/>
    <MigrantMinistrySection {...MigrantMinstryDataFour}/>
    <PhotoSection />
    </>    
    );
}

export default MigrantMinstry;