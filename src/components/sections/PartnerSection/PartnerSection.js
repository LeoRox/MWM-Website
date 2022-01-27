import React from 'react';
import {Container, 
        Wrapper,
        ImageWrapper,
        Image,
        Item,
        Heading,
        Subheading,
} from './PartnerSection.element'

const PartnerSection = ({title, subtitle}) => {
    return (
        <>
          <Container>
              <Heading data-aos='fade-in' data-aos-delay='100' data-aos-easing="ease-in" data-aos-mirror="true"
    data-aos-once="true">Collaboration and Partnership</Heading>
              <Subheading ata-aos='fade-in' data-aos-delay='100' data-aos-easing="ease-in" data-aos-mirror="true"
    data-aos-once="true">Meet our generous partners</Subheading>
              <Wrapper>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/dp_logo.png')}/>
                  </ImageWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/esp_logo.png')}/>
                  </ImageWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/hub_logo.jpg')}/>
                  </ImageWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/brock_logo.png')}/>
                  </ImageWrapper>
                  </Item>
              </Wrapper>
              <Wrapper>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/Clarington.jpg')}/>
                  </ImageWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/ohcow_logo.png')}/>
                  </ImageWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/sa_logo.png')}/>
                  </ImageWrapper>
                  </Item>
              </Wrapper>
          </Container>
        </>
    );
}

export default PartnerSection;