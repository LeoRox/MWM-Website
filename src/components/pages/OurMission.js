import React from 'react';
import styled from 'styled-components';
import { OurMissionHero } from '../data/PageHeroData';
import { HeroImgSection } from '../sections';
import { TeamSection } from '../sections';


function OurMission() {
    return (
        <>
         <HeroImgSection {...OurMissionHero} />
            <Mission>
                <Container data-aos='fade-in' data-aos-delay='100' data-aos-easing="ease-in" data-aos-mirror="true"
    data-aos-once="true">
                    <Wrapper>
                        <Heading>Mission Statement</Heading>
                        <Body>To make a positive impact on the quality of life and spiritual care of migrant farm workers by building community relationships and sharing the Gospel of Jesus Christ.</Body>
                    </Wrapper>
                </Container>
            </Mission>
          <TeamSection />
        </>
    )
}

export const Mission = styled.div`
  background: #800000;
  height: 400px;
`
export const Vision = styled.div`
  background: #fff;
  height: 400px;
`
export const Container = styled.div`
  padding: 5rem calc((100vw - 1300px) / 2);
  z-index: 1;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  justify-content: center;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`
export const Wrapper = styled.div`
  position: absolute;
  left: 55%;
  transform: translate(-50%, 0%);
`
export const Heading = styled.h1`
  color: #fff;
  padding-bottom: 1rem;
  font-size: 65px;
  align-self: center;
`
export const Body = styled.p`
  font-size: 22px;
  font-style: italic;
  color: #fff;
  justify-self: center;
`
export const Heading2 = styled.h1`
  color: #000;
  font-size: 65px;
  align-self: center;
`
export const Body2 = styled.p`
  font-size: 22px;
  font-style: italic;
  color: #000;
  justify-self: center;
`
export default OurMission;
