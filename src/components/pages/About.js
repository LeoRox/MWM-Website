import React from 'react';
import '../../App.css';
import HeroImgSection from '../sections/HeroSection/HeroImgSection';
import YoutubeEmbed from '../YoutubeEmbed';
import { AboutHero} from '../data/PageHeroData';
import { MigrantMinistrySection } from '../sections';
import { AboutOne } from '../data/AboutData';
import styled from 'styled-components';

function About() {
    return (
        <>
        <HeroImgSection {...AboutHero} />
        <YoutubeEmbed />
        <Vision>
                <Container data-aos='fade-in' data-aos-delay='100' data-aos-easing="ease-in" data-aos-mirror="true"
    data-aos-once="false">
                    <Wrapper>
                        <Heading2>Vision Statement</Heading2>
                        <Body2>To make a positive impact on the quality of life and spiritual care of migrant farm workers by building community relationships and sharing the Gospel of Jesus Christ.</Body2>
                    </Wrapper>
                </Container>
        </Vision>
        <MigrantMinistrySection {...AboutOne} />
        </>
    );
}

export const Vision = styled.div`
  background: rgba(119,0,0);
  opacity: 80%;
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
export const Heading2 = styled.h1`
  color: #fff;
  font-size: 65px;
  align-self: center;
`
export const Body2 = styled.p`
  font-size: 22px;
  font-style: italic;
  color: #fff;
  justify-self: center;
`
export default About;

