import React from 'react'
import styled from 'styled-components'

// slide 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

  return (
    <Carousel {...settings}>
        <Wrap>
            <img src='/images/power.webp' alt='bulb'/>
        </Wrap>
        <Wrap>
            <img src='/images/newlight.jpg' alt='light'/>
        </Wrap>
        <Wrap>
            <img src='/images/figures.png' alt='figure'/>
        </Wrap>
    </Carousel>
  )
}
export default ImgSlider


const Carousel = styled(Slider)`
    ul li button {
        &:before{
            font-size: 10px;
            color: rgb(97, 102, 109);
        }
    }

    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: none;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    
    img {
        border: 0px solid transparent;
        border-radius: 0px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
    }

`