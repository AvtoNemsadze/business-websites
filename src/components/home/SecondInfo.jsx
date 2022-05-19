import React from 'react'
import styled from 'styled-components'

function Info() {
  return (
    <Container>
         <ImgBox>
            <Img src='/images/rocketIcon.png' alt=''/>
        </ImgBox>
        <TextBox>
            <Title>What is our Mission?</Title>
            <Text>
                In the company, we understand the
                importance of having the right energy
                partner, and we are proud to be one of the
                largest providers of electricity in the Europe to
                hotels, motels, convenience stores, and fast
                food restaurants since 2002. We offer competitive
                pricing for both small and large businesses.
            </Text>
        </TextBox>
    </Container>
  )
}

export default Info;

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const TextBox = styled.h1`
    max-width: 400px;
    font-size:21px;
    line-height: 80px;
    margin-top: 20px;
`

const Title = styled.h3`
    color: #6e970e;
`
const Text = styled.p`
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: 2px;
    color:rgb(204, 204, 207);
    font-size:20px;
    border-bottom: 2px solid #6e970e;
    padding-bottom: 10px;
`
const ImgBox = styled.div`
    padding-top: 40px;
    justify-content: flex-start;
`

const Img = styled.img`
    width: 80%;
    height: auto;

    @media (max-width: 650px) {
        display: none;
    }
`