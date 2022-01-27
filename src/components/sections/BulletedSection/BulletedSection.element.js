import styled from "styled-components";

export const Section = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#fff' : 'rgb(105,0,0,0.82)')};
  height: 800px
`;


export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 0px -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')
};
`;

export const Column = styled.div`
  margin-bottom: 0px;
  margin-top: 100px;
  padding-right: 0px;
  padding-left: 0px;
  flex: 1;
  max-width: 100%;
  flex-basis: 50%;
  

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 777px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 50px;
  padding-left: 50px;
  flexDirection: row;

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

export const List = styled.li`
  max-width: 700px;
  margin-bottom: 5px;
  margin-left: 20px;
  font-size: 25px;
  font-style: bullet;
  line-height: 37px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#f7f8fa' : '#000000')};
`;

export const Body = styled.p`
  max-width: 700px;
  margin-bottom: 5px;
  font-size: 25px;
  line-height: 37px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#f7f8fa' : '#000000')};
`;

export const Body2 = styled.h2`
  max-width: 1200px;
  margin-top: 40px;
  font-size: 28px;
  font-weight: 75x;
  font-style: italic;
  line-height: 37px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#f7f8fa' : '#000000')};
`;
