import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const ShopBtn = () => {
  return (
    <Wrap>
        <Link exact to="/products">
            <Btn>Our Product</Btn>
        </Link>
    </Wrap>
  )
}

export default ShopBtn;

const Wrap = styled.div`
    margin-top: 50px;
    text-align: center;
    padding: 1.5rem;

    @media (max-width: 820px) {
    font-size: 14px;
    
    justify-content: center;
    display: flex;
 }

`

const Btn = styled.button`
   
 position: relative;
 display: inline-block;
 padding: 15px 30px;
 text-align: center;
 font-size: 19px;
 letter-spacing: 1px;
 text-decoration: none;
 color: #725AC1;
 background: transparent;
 cursor: pointer;
 transition: ease-out 0.5s;
 border-radius: 30px;
 border: 2px solid #725AC1;
 border-radius: 10px;
 box-shadow: inset 0 0 0 0 #725AC1;

:hover {
 color: white;
 box-shadow: inset 0 -100px 0 0 #725AC1;
}
:active {
 transform: scale(0.9);
}

  @media (max-width: 750px) {
    font-size: 15px;
}
`