import React from 'react';
import { Column,
         Container,
         Wrapper,
         Logo,
         Header,
         Text,
         Email,
         LogoWrapper
} from './ContactSection.element';

const ContactSection = () => {
  return (
    <>
    <Container>
        <Wrapper>
            <Column>
            <Logo>
            <i className='fas fa-church'></i>
            </Logo>
            <Header>Locate Us</Header>
            <Text>23 Mill St, Clarington ON</Text>
            </Column>
            <Column>
            <Logo>
            <i className='fas fa-phone'></i>
            </Logo>
            <Header>Call Us</Header>
            <Text>+1 (416) 886-4482</Text>
            </Column>
            <Column>
            <Logo>
            <i className='far fa-envelope'></i>
            </Logo>
            <Header>Email Us</Header>
            <Email href='mailto:augusto.nunez73@gmail.com'>augusto.nunez73@gmail.com</Email>
            </Column>
            <Column>
            <LogoWrapper>
            <Logo>
            <i className='fab fa-facebook-f'></i>
            </Logo>
            <Logo>
            <i className='fab fa-youtube'></i>
            </Logo>
            </LogoWrapper>
            <Header>Find Us</Header>
            <Text>Follow us for more</Text>
            </Column>
        </Wrapper>
    </Container>
    </>
    );
}

export default ContactSection;