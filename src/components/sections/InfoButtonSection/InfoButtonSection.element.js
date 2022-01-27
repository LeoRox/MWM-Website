import styled from "styled-components";

export const InfoSec = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#fff' : 'rgb(105,0,0,0.82)')};
  height: 800px
`;


export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0px -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')
};
`;

export const InfoColumn = styled.div`
  margin-bottom: 0px;
  margin-top: 150px;
  padding-right: 0px;
  padding-left: 0px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 560px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 540px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;


export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 700px;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  box-shadow: 15px 15px ${({ imgShadow }) => (imgShadow ? '#fff' : '	#800000')};
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  padding-left: 24px;
  font-size: 65px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#000000' : '#f7f8fa')};
`;

export const Body = styled.p`
  max-width: 700px;
  margin-bottom: 35px;
  font-size: 25px;  
  line-height: 35px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#f7f8fa' : '#000000')};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  align-self: center;
  margin-right: 100px;
  margin-left: 20px;
`