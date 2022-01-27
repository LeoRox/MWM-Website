import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  height: 400px;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  padding: 2rem 2rem;
  grid-gap: 150px;
  justify-content: end;
  width: 70vw;
  list-style: none;
  text-align: center; 
`

export const Column = styled.div`
  margin-top: 70px;
  width: 200px;
`

export const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 40px
  `

export const Logo = styled.div`
  font-size: 70px;
  color: rgba(119,10,0);
  
`

export const Header = styled.h2`
  align-self: center;
  font-size: 40px;
  margin-bottom: 15px;
`

export const Text = styled.p`
font-size: 20px;
`

export const Email = styled.a`
  color: rgba(0,0,0);
  font-size: 19px;
  text-decoration: none;
`