import React from 'react'
import { 
    Section,
    Row,
    Container,
    Column,
    TextWrapper,
    Img,
    ImgWrapper,
    Heading,
    Body
} from './MigrantMinistrySection.element';

const MigrantMinistrySection = ({ lightBg, image, imgStart, lightText, lightTextDesc, imgShadow, heading, body, start, alt, delay }) => {
    return (
        <>
          <Section lightBg={lightBg}>
              <Container>
                  <Row imgStart ={imgStart} data-aos='fade-in' data-aos-delay={delay} data-aos-easing="ease-in" data-aos-mirror="true"
    data-aos-once="false">
                      <Column>
                          <TextWrapper>
                              <Heading lightText={lightText}>{heading}</Heading>
                              <Body lightTextDesc={lightTextDesc}>{body}</Body>
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

export default MigrantMinistrySection;