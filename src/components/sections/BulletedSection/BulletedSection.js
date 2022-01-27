import React from 'react';
import { 
    Section,
    Row,
    Container,
    Column,
    TextWrapper,
    Img,
    ImgWrapper,
    Heading,
    List,
    Body,
    Body2
} from './BulletedSection.element';

const BulletedSection = ({ lightBg, image, imgStart, list, body1, body2, lightText, lightTextDesc, imgShadow, heading, body, start, alt, delay }) => {
    return (
        <>
          <Section lightBg={lightBg}>
              <Container>
                  <Row imgStart ={imgStart} data-aos='fade-in' data-aos-delay={delay} data-aos-easing="ease-in" data-aos-mirror="true"
    data-aos-once="false">
                      <Column>
                          <TextWrapper>
                              <Heading lightText={lightText}>{heading}</Heading>
                              <Body lightTextDesc={lightTextDesc}>{body1}</Body>
                              <ul>
                              {list.map((item, index) => {
                                return (
                                    <List lightTextDesc={lightTextDesc}>{item}</List>
                                );
                                })}  
                              </ul>
                              <Body2 lightTextDesc={lightTextDesc}>{body2}</Body2>
                          </TextWrapper>
                      </Column>
                      <Column>
                          <ImgWrapper start={start}>
                              <Img src={image} alt={alt} imgShadow={imgShadow} />
                          </ImgWrapper>
                      </Column>
                  </Row>
              </Container>
          </Section>
        </>
    )
}

export default BulletedSection;