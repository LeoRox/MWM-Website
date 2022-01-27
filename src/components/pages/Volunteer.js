import React from 'react';
import { VolunteerHero } from '../data/PageHeroData';
import { HeroImgSection, InfoSection } from '../sections';
import BulletedSection from '../sections/BulletedSection/BulletedSection';
import { VolunteerDataOne, VolunteerDataTwo} from '../data/VolunteerData';


function Volunteer() {
  return (
  <>
    <HeroImgSection {...VolunteerHero} />
    <InfoSection {...VolunteerDataOne} />
    <BulletedSection {...VolunteerDataTwo} />
  </>
  );
}

export default Volunteer;
