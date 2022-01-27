import React from 'react';
import {Container, 
        Wrapper,
        ImageWrapper,
        TextWrapper,
        Title,
        Subtitle,
        Image,
        Item,
        Email,
        Heading,
        Subheading
} from './PhotoSection.element'

const PhotoSection = ({title, subtitle}) => {
    return (
        <>
          <Container>
              <Heading data-aos='fade-in' data-aos-delay='100' data-aos-easing="ease-in" data-aos-mirror="true"
    data-aos-once="true">Parish Engagement</Heading>
              <Subheading ata-aos='fade-in' data-aos-delay='100' data-aos-easing="ease-in" data-aos-mirror="true"
    data-aos-once="true">"We are all One Body in Christ"</Subheading>
              <Wrapper>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/st_saviours.jpg')}/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title> St. Saviours </Title>
                      <Subtitle>Orono, Ontario</Subtitle>
                      <Email href='mailto: augusto.nunez73@gmail.com'>augusto.nunez73@gmail.com</Email>      
                  </TextWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/st_john_I.jpeg')}/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title> St. John's </Title>
                      <Subtitle>Ida, Ontario</Subtitle>
                      <Email href='mailto: stjohnsidarector@nexicom.net'>stjohnsidarector@nexicom.net</Email>      
                  </TextWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/st_pauls.jpg')}/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title> St. Paul's</Title>
                      <Subtitle>Beaverton, Ontario</Subtitle>
                      <Email href='mailto: revted@mac.com'>revted@mac.com</Email>      
                  </TextWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/st_johns_B.jpg')}/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title> St. John's </Title>
                      <Subtitle>Bomanville, Ontario</Subtitle>
                      <Email href='mailto: cathiemccabe14@gmail.com'>cathiemccabe14@gmail.com</Email>      
                  </TextWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/st_george.JPG')}/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title> St. George's </Title>
                      <Subtitle>Pickering Village, Ontario</Subtitle>
                      <Email href='mailto: sspicer12@gmail.com'>sspicer12@gmail.com</Email>   
                  </TextWrapper>
                  </Item>
              </Wrapper>
              <Wrapper>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/st_paul_L.jpg')}/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title> St. Paul's </Title>
                      <Subtitle>Lindsay, Ontario</Subtitle>    
                  </TextWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/christ_church.jpg')}/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title> Christ Church </Title>
                      <Subtitle>Oshawa, Ontario</Subtitle>
                      <Email href='mailto: kitgreaves1@gmail.com'>kitgreaves1@gmail.com</Email>      
                  </TextWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/holy_trinity.jpg')}/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title> Holy Trinity</Title>
                      <Subtitle>Thornhill, Ontario</Subtitle>
                      <Email href='mailto: erjpreston@gmail.com'>erjpreston@gmail.com</Email>      
                  </TextWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/st_john_P.jpg')}/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title> St. John's </Title>
                      <Subtitle>Peterborough, Ontario</Subtitle>
                      <Email href='mailto: rector@stjohnspeterborough.ca'>rector@stjohnspeterborough.ca</Email>      
                  </TextWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src={require('../../images/minden_parish.jpg')}/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title> Parish of Minden</Title>
                      <Subtitle>Minden, Ontario</Subtitle>
                      <Email href='mailto: bygrace_jc@hotmail.com'>bygrace_jc@hotmail.com</Email>   
                  </TextWrapper>
                  </Item>
              </Wrapper>
          </Container>
        </>
    );
}

export default PhotoSection;