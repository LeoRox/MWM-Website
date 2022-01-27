import React from 'react';
import { DonateDataOne, DonateDataTwo } from '../data/DonateData';
import { DonateHero } from '../data/PageHeroData';
import { BulletedSection, HeroImgSection, InfoButtonSection } from '../sections';

function Donate() {
  return (
  <>
    <HeroImgSection {...DonateHero} />
    <InfoButtonSection {...DonateDataOne} />
    <BulletedSection {...DonateDataTwo} />
  </>
  );
}

export default Donate;
