import React from "react";
import ImgSlider from "../components/home/ImgSlider";
import Product from "../components/home/Product";
import styled from 'styled-components'
import Info from "../components/home/Info";
import SecondInfo from "../components/home/SecondInfo";
import Featured from "../components/home/Featured";
import Footer from "../components/home/Footer";
import ShopBtn from "../components/home/ShopBtn";

// animtaion
import Roll from 'react-reveal/Fade';


export const Home = () => {
  return (
    <Container>
        <ImgSlider />
        <TextContainer><Text>Featured Product</Text></TextContainer>
        <Product />
        <ShopBtn />
        <Info />
        <SecondInfo />
        
        <Roll bottom>
          <Featured />
        </Roll>

        <Space></Space>

        <Roll top>
          <Footer />
        </Roll>
    </Container>
  );
};


const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;

  background-color: rgb(12, 18, 32);
`

const TextContainer = styled.div`
  text-align: center;
  margin-top: 60px;
`
const Text = styled.h1`
  color: rgb(157 23 77);
  text-align: center;
  font-family: cursive;
`

  const Space = styled.div`
    padding: 2rem;
  `