import React from "react";
import styled from "styled-components";
import Body from "../Body/Body";
import Header from "../Header/Header";


const Task = () => {


  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
};

export default Task;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  background-color: rgb(250, 249, 248);
`;
