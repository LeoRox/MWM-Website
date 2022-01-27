import styled from "styled-components";

export const Container = styled.div`
    background: url(${({ url }) => (url)}) center center/cover no-repeat;
    height: 790px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    object-fit: contain;
    z-index: -2;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(119,0,0);
    opacity: 60%;
    z-index: 0;
`;

export const Heading = styled.h1`
    color: rgb(255, 255, 255);
    font-size: 225px;
    margin-top: 200px;
    width: 1500px;
    margin-left: 100px;
    z-index: 2;
    text-shadow: 0 2px 0 black;
    letter-spacing: 2px;
`;