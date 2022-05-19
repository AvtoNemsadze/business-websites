import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import DarkMode from "../components/theme/DarkMode";
import Select from './Tabs'


export function Products(){
  return (
    <Container>
          <DarkMode />
      <Select />
      <Box>
            <Link 
              exact
              to="/"
              >
            <Button>
              Back Home
          </Button>
            </Link>
      </Box>
    </Container>
  );
};


const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
`


const Box = styled.div`
  text-align: center;
  margin-top: 50px;
  justify-content: space-around;
  padding: 1rem;
  color: purple;
`

const Button = styled.button`
  width: 160px;
  height: 60px;
  cursor: pointer;
  border: 2px solid black;
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: cursive;
  border-radius: 10px;


  :hover{
    transition: ease-out 0.7s;
    box-shadow: inset -160px 0 0 black;
    color: purple;
  }
`