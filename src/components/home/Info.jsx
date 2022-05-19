import React from 'react'
import styled from 'styled-components'

function Info() {
  return (
    <Container>
        <TextBox>
            <Title>Why Choose Our Company?</Title>
            <Text>
                In the company, we understand the
                importance of having the right energy
                partner, and we are proud to be one of the
                largest providers of electricity in the Europe to
                hotels, motels, convenience stores, and fast
                food restaurants since 2002. We offer competitive
                pricing for both small and large businesses.
                Plus, when you sign on with Tara Energy, you 
                also benefit from the corporate power of the
                Just Energy Group of companies.  
            </Text>
        </TextBox>
        <ImgBox>
            <Img src='/images/gallery.jpeg' alt=''/>
        </ImgBox>
    </Container>
  )
}

export default Info;

const Container = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const TextBox = styled.h1`
    max-width: 700px;
    font-size:21px;
    line-height: 80px;
`

const Title = styled.h3`
    color: orange;
`
const Text = styled.p`
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: 2px;
    color:rgb(204, 204, 207);
    font-size:20px;
    border-bottom: 2px solid orange;
    padding-bottom: 10px;
`
const ImgBox = styled.div`
    padding-top: 10px;
    justify-content: flex-end;

`
const Img = styled.img`
    width: 400px;
    height: 400px;
`