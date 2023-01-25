import React from "react";
import styled from "styled-components";
import TaskProps from "../Props/TaskProps";
import { CgHome } from "react-icons/cg";


interface props {
  blueLine: string;
  background: string;
}

const MainTask:React.FC<props> = ({background,blueLine}) => {
  return (
    <Container>
        <TaskProps
        blueline={blueLine}
        bg={background}
          margin_right="23px"
          font_size="20px"
          text="Task"
          icon={<CgHome />}
        />
      <Hr></Hr>
    </Container>
  );
};

export default MainTask;

const Hr = styled.div`
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  width: 85%;
  margin-left: 30px;
  margin-top: 8px;
`;

const Container = styled.div``;
