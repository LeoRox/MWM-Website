import React from 'react';
import { SupportHero } from '../data/PageHeroData';
import { SupportOne } from '../data/SupportData';
import { HeroImgSection, MigrantMinistrySection, PartnerSection } from '../sections';
import styled from 'styled-components';
import { Button } from '../Button';

function Support() {
  return (
  <>
   <HeroImgSection {...SupportHero} />
   <MigrantMinistrySection {...SupportOne} />
    <Container>
      <Wrapper>
        <ButtonWrapper>
          <Button buttonStyle='btn--outline' buttonSize='btn--xlarge'>Volunteer</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button buttonStyle='btn--outline' buttonSize='btn--xlarge'>Donate</Button>
        </ButtonWrapper>
      </Wrapper>
    </Container>
    <PartnerSection/>
  </>
  );
}

export const Container = styled.div`
  height: 300px;
  background-color: rgba(119,10,0,0.8);
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2,auto);
  width: 70vw;
  grid-gap: 100px;
  justify-content: end;
  list-style: none;
  

`
export const ButtonWrapper = styled.div`
  margin-top: 100px;
`

export default Support;
