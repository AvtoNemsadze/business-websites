import React from "react";
import styled from 'styled-components'

import ImageBox from './Timeline'
import SocialIons from '../components/home/SocialIcons';

export const About = () => {
  return (
    <Container>
      <Box>
        <h2>About us</h2>
          <p>
                In the company, we understand the
                importance of having the right energy
                partner, and we are proud to be one of the
                largest providers of electricity in the Europe to
                hotels, motels, convenience stores, and fast
                food restaurants since 2002. We offer competitive
                pricing for both small and large businesses.
           </p>
      </Box>
        <ImageBox />
        <Space></Space>
        <Footer>
          <SocialIons />
          <span>© 2022 About Company. All rights reserved.</span>
        </Footer>
    </Container>
  );
};


const Container = styled.div`
  justify-content: center;
`

const Box = styled.div`
    max-width: 50rem;
    margin: 70px auto;
    font-size:21px;
    line-height: 80px;
    align-items: center;

    h2{
      color: purple;
      text-align: center;
      font-family: cursive;
    }

  p{
    line-height: 1.9rem;
    font-weight: 500;
    letter-spacing: 1.8px;
    color:rgb(204, 204, 207);
    font-size:23px;
    color: black;
    font-family: 'Times New Roman', Times, serif;
    font-family: cursive;
    border-bottom: 2px solid yellowgreen;
    padding-bottom: 20px;
  }
`

const Space = styled.div`
  padding: 2rem;
`


const Footer = styled.div`
  padding: 1rem;
  background-color: rgb(15 23 42);

  span{
    color: white;
    justify-content: center;
    display: flex;
    margin-top: 20px;
  }
`