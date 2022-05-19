import React from 'react'
import styled from 'styled-components'
import homeproduct from '../content/productData.js';

import {allProductData} from '../content/allProduct.js';
import {bulbs} from '../content/items.js';
import {chandleirs} from '../content/items.js';
import {lamps} from '../content/items.js';

//general function
const Items = ({img, title, price}) => {
    return ( 
        <ArticleBox>
            <Img src= {img} alt=''/>
            <h4>{title}</h4>
            <p>$ {price}</p>
         </ArticleBox>
    );
};

// all product 
export const AllProduct = () => {
    return ( 
        <Container> 
            {allProductData.map((tech, index)=>{
                return <Items key={tech.id} {...tech}></Items>;
            })}
        </Container>
  );
}


// bulbs product 
export const Bulbs = () => {
    return ( 
        <Container> 
            {bulbs.map((tech, index)=>{
                return <Items key={tech.id} {...tech}></Items>;
            })}
        </Container>
  );
}


// Chandelier 
export const Chandelier = () => {
    return ( 
        <Container> 
            {chandleirs.map((tech, index)=>{
                return <Items key={tech.id} {...tech}></Items>;
            })}
        </Container>
  );
}


// Lamps
export const Lamps = () => {
    return ( 
        <Container> 
            {lamps.map((tech, index)=>{
                return <Items key={tech.id} {...tech}></Items>;
            })}
        </Container>
  );
}


// home product
function Product(){
    return ( 
        <Container> 
            {homeproduct.map((tech, index)=>{
                return <Items key={tech.id} {...tech}></Items>;
            })}
        </Container>
  );
}
export default Product



// styles
const ArticleBox = styled.div`
  padding: 1rem 2rem;
  height: 320px;
  width: 250px;
  border: 1px solid black;
  background: #fff;

  :hover{
      box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  }
  
  h4{
  color:rgb(6, 48, 51);
  text-align: center;
  cursor: pointer;
  margin-top: 30px;
  :hover{
      text-decoration: underline;
  }
 }

  p{
  color: #091c6e;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
 }

`

const Img = styled.img`
    width: 100%;
    height: auto;
    cursor:pointer;
`

const Container = styled.div`
  margin-top: 1.5rem;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  grid-gap: 20px;
`