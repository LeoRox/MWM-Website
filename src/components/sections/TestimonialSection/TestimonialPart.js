import React from 'react';
import { Name,
         Testimony,
         Testimonial
} from './TestimonialSection.element';

const TestimonialPart = ({name, testimony, delay}) => {
    return (
    <>
        <Testimonial data-aos='fade-in' data-aos-delay={delay} data-aos-easing="ease-in">
            <Name>{name}</Name>
            <Testimony>{testimony}</Testimony>
        </Testimonial>
    </>
    )
}

export default TestimonialPart;