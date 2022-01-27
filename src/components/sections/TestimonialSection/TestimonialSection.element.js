import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`

export const TopLine = styled.p`
  color: #800000;
  font-size: 2rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

export const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 2rem 2rem;
  grid-gap: 40px;
  text-align: Left;
  width: 70vw;
  list-style: none;
  justify-content: end;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

  }
`

export const Testimonial = styled.div``
export const Name= styled.h3`
  color: #000000;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`
export const Testimony = styled.p`
  color: #3b3b3b;
  font-size: 20px;
`