import styled from "styled-components";

export const Container = styled.div`
  height: 850px;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  padding: 2rem 2rem;
  grid-gap: 35px;
  justify-content: end;
  width: 93vw;
  list-style: none;
`

export const Item = styled.div`
  align-content: center;
`
export const Heading = styled.h1`
  font-size: 80px;
  margin-left: 40px;
  margin-top: 60px;
`
export const Subheading = styled.h2`
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-style: italic;
`

export const ImageWrapper = styled.div`
  
`

export const TextWrapper = styled.div`

`

export const Title = styled.h2`

`

export const Subtitle = styled.p`
`
export const Image = styled.img`
  width: 275px;
  height: 175px;
  &:hover{
      width: 280px;
      height: 180px;
      transition: all 0.3s ease-in-out;
  }
`
export const Email = styled.a`
  color: rgba(0,0,0); 
  &:hover {
      color: rgba(119,0,0);
  }
`