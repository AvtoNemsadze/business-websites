import React from "react";
import styled from 'styled-components'
import Login from "../components/Log/Login";
import Roll from 'react-reveal/Fade';


export const Contact = () => {
  return (
      <Wrap>
        <Roll right>
          <Login />
        </Roll>
      </Wrap>
  );
};


const Wrap = styled.div`
   min-height: calc(100vh - 70px);
  overflow-x: hidden;
`