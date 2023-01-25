import React from "react";
import styled from "styled-components";

interface props {
  icon: any;
  text: string;
  font_size: string;
  margin_right: string;
  bg: string;
  blueline: string;
}

const TaskProps: React.FC<props> = ({
  text,
  icon,
  margin_right,
  font_size,
  bg,
  blueline,
}) => {
  return (
    <Container bg={bg}>
      <BlueLine b={blueline}></BlueLine>
      <Icon mg={margin_right} fz={font_size}>
        {icon}
      </Icon>
      <TaskTitle>{text}</TaskTitle>
    </Container>
  );
};

export default TaskProps;

const BlueLine = styled.div<{ b: string }>`
  width: 1.6px;
  margin-left: 1px;
  float: left;
  height: 100%;
  background-color: ${({ b }) => (b ? "rgb(37, 99, 207)" : "")};
`;

const TaskTitle = styled.span`
  color: rgb(0, 0, 0, 0.8);
  text-transform: capitalize;
`;
const Icon = styled.div<{ fz: string; mg: string }>`
  display: flex;
  justify-content: center;
  margin-left: 30px;
  align-items: center;
  color: rgb(0, 0, 0, 0.6);
  font-size: ${(fz) => fz.fz};
  margin-right: ${(mg) => mg.mg};
  margin-top: 5px;
`;
const Container = styled.div<{ bg: string }>`
  display: flex;
  margin-top: 10px;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: ${({ bg }) => (bg ? "rgb(239, 246, 252)" : "")};
  cursor: pointer;
  :hover {
    background-color: lavender;
  }
`;
