import React from 'react';
import { 
        Container, 
        Overlay,
        Heading,
} from './HeroImgSection.element';



const HeroImgSection = ({header, url}) => {
    return (
        <Container url = {url}>
            <Overlay/>
            <Heading>{header}</Heading>
        </Container>
    );
}

export default HeroImgSection;
