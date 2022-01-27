import React from 'react';
import { Button } from '../../Button';
import { 
    InfoSec,
    InfoRow,
    Container,
    InfoColumn,
    TextWrapper,
    Img,
    ImgWrapper,
    Heading,
    Body,
    ButtonWrapper
} from './InfoButtonSection.element';

const InfoButtonSection = ({ lightBg, image, imgStart, lightText, lightTextDesc, imgShadow, heading, body, start, alt, delay }) => {
    return (
        <>
          <InfoSec lightBg={lightBg}>
              <Container>
                  <InfoRow imgStart ={imgStart} data-aos='fade-in' data-aos-delay={delay} data-aos-easing="ease-in" data-aos-mirror="true"
    data-aos-once="false">
                      <InfoColumn>
                          <TextWrapper>
                              <Heading lightText={lightText}>{heading}</Heading>
                              <Body lightTextDesc={lightTextDesc}>{body}</Body>
                              <ButtonWrapper>
                                <Button buttonStyle='btn--outline'>Donate Now</Button>
                              </ButtonWrapper>
                          </TextWrapper>
                      </InfoColumn>
                      <InfoColumn>
                          <ImgWrapper start={start} >
                              <Img src={image} alt={alt} imgShadow={imgShadow} />
                          </ImgWrapper>
                      </InfoColumn>
                  </InfoRow>
              </Container>
          </InfoSec>
        </>
    )
}

export default InfoButtonSection;