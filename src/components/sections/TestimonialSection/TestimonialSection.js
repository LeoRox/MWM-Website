import React from 'react';
import { TestimonialDataFour, TestimonialDataOne, TestimonialDataThree, TestimonialDataTwo } from '../../data/TestimonialData';
import { TestimonialsContainer,
         TopLine,
         Description,
         ContentWrapper,
         Column
} from './TestimonialSection.element';
import TestimonialPart from './TestimonialPart';

const TestimonialSection = ({name, testimony}) => {
    return (
        <TestimonialsContainer >
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What is Our Impact?
            </Description>
            <ContentWrapper>
                <TestimonialPart {...TestimonialDataOne}/>
                <TestimonialPart {...TestimonialDataTwo} />
            </ContentWrapper>
            <ContentWrapper>
            <TestimonialPart {...TestimonialDataThree} />
            <TestimonialPart {...TestimonialDataFour} />
            </ContentWrapper>
        </TestimonialsContainer>
    );
}

export default TestimonialSection;