import React from 'react';
import {Container, 
        Wrapper,
        ImageWrapper,
        TextWrapper,
        Title,
        Subtitle,
        Image,
        Item,
        Text,
        Heading,
        Subheading
} from './TeamSection.element'

const TeamSection = ({title, subtitle}) => {
    return (
        <>
          <Container>
              <Heading data-aos='fade-in' data-aos-delay='100' data-aos-easing="ease-in" data-aos-mirror="true"
    data-aos-once="true">Meet the Team</Heading>
              <Subheading ata-aos='fade-in' data-aos-delay='100' data-aos-easing="ease-in" data-aos-mirror="true"
    data-aos-once="true"></Subheading>
              <Wrapper>
                  <Item>
                  <ImageWrapper>
                      <Image src=''/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title> Rev. Augusto nunez73 </Title>
                      <Subtitle>El Jefe</Subtitle>
                      <Text>Pastor of St. Saviour's, Orono</Text>      
                  </TextWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src=''/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title>Rev. Kit Greaves</Title>
                      <Subtitle>Director</Subtitle>
                      <Text>Pastor of Christ Church, Oshawa</Text>       
                  </TextWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src=''/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title> Ted McCollum</Title>
                      <Subtitle>Chair</Subtitle>
                      <Text>Pastor of St. Paul's, Beaverton</Text>       
                  </TextWrapper>
                  </Item>
              </Wrapper>
              <Wrapper>
                  <Item>
                  <ImageWrapper>
                      <Image src=''/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title> Shelley Molica</Title>
                      <Subtitle>Treasurer</Subtitle>
                      <Text>Treasurer of St. Saviour's, Orono</Text>      
                  </TextWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src=''/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title>Cathie McCabe</Title>
                      <Subtitle>Secretary</Subtitle>
                      <Text>Warden St. John’s Bowmanville</Text>      
                  </TextWrapper>
                  </Item>
                  <Item>
                  <ImageWrapper>
                      <Image src=''/>
                  </ImageWrapper>
                  <TextWrapper>
                      <Title>William Tomlinson</Title>
                      <Subtitle>Vice-Chair</Subtitle>
                      <Text>Warden St. Saviour’s, Orono</Text>  
                  </TextWrapper>
                  </Item>
              </Wrapper>
          </Container>
        </>
    );
}

export default TeamSection;