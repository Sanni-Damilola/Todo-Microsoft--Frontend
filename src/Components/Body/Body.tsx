import React from "react";
import styled from "styled-components";
import Assigned from "../AssignedToMe/Assigned";
import Important from "../Important/Important";
import MainTask from "../MainTask/MainTask";
import MyDay from "../MyDay/MyDay";
import Planned from "../Planned/Planned";
import { AiOutlineMenu, AiOutlineFileAdd } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";
import { ImCheckmark2 } from "react-icons/im";
import AddTaskMyday from "../MyDay/AddTaskMyday";
import AssignedTask from "../AssignedToMe/AssignedTask";
import AddImportantTask from "../Important/AddImportantTask";
import AddMainTask from "../MainTask/AddMainTask";
import AddPlannedTask from "../Planned/AddPlannedTask";

const Body = () => {
  const [show, setShow] = React.useState(false);
  const func = () => {
    setShow(!show);
  };

  const [route, setRoute] = React.useState(true);
  const taskRoute = () => {
    setRoute(true);
    setImportanat(false);
    setAssigned(false);
    setMainTask(false);
    setIPlanned(false);
  };

  const [importantRoute, setImportanat] = React.useState(false);
  const importantTask = () => {
    setRoute(false);
    setImportanat(true);
    setAssigned(false);
    setMainTask(false);
    setIPlanned(false);
  };

  const [plannedRoute, setIPlanned] = React.useState(false);
  const plannedFunction = () => {
    setRoute(false);
    setImportanat(false);
    setAssigned(false);
    setMainTask(false);
    setIPlanned(true);
  };

  const [assignedRoute, setAssigned] = React.useState(false);
  const assignedFunction = () => {
    setRoute(false);
    setImportanat(false);
    setAssigned(true);
    setMainTask(false);
    setIPlanned(false);
  };

  const [mainRoute, setMainTask] = React.useState(false);
  const mainTask = () => {
    setRoute(false);
    setImportanat(false);
    setAssigned(false);
    setMainTask(true);
    setIPlanned(false);
  };

  return (
    <Container ai="">
      <ToggleMenu onClick={func} dn={show ? "" : "value"}>
        <AiOutlineMenu />
      </ToggleMenu>
      <Right dn={show ? "value" : ""}>
        <Menu onClick={func}>
          <AiOutlineMenu />
        </Menu>
        <MyDayWrap onClick={taskRoute}>
          <MyDay
            background={route ? "value" : ""}
            blueLine={route ? "value" : ""}
          />
        </MyDayWrap>
        <ImportantWrap onClick={importantTask}>
          <Important
            background={importantRoute ? "value" : ""}
            blueLine={importantRoute ? "value" : ""}
          />
        </ImportantWrap>
        <PlannedWrap onClick={plannedFunction}>
          <Planned
            background={plannedRoute ? "value" : ""}
            blueLine={plannedRoute ? "value" : ""}
          />
        </PlannedWrap>
        <AssignedWrap onClick={assignedFunction}>
          <Assigned
            background={assignedRoute ? "value" : ""}
            blueLine={assignedRoute ? "value" : ""}
          />
        </AssignedWrap>
        <MainTaskWrap onClick={mainTask}>
          <MainTask
            background={mainRoute ? "value" : ""}
            blueLine={mainRoute ? "value" : ""}
          />
        </MainTaskWrap>
        <NewList>
          <Icon>
            <HiPlus />
          </Icon>
          <Span>new list</Span>
        </NewList>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Botton>
          <BottonIcon>
            <CiMail />
          </BottonIcon>
          <BottonIcon>
            <IoCalendarOutline />
          </BottonIcon>
          <BottonIcon>
            <MdPeopleOutline />
          </BottonIcon>
          <BottonIcon>
            <AiOutlineFileAdd />
          </BottonIcon>
          <Mark>
            <ImCheckmark2 />
          </Mark>
        </Botton>
      </Right>

      <Middle wd="">
        {route ? <AddTaskMyday display={show ? "value" : ""} /> : null}
        {importantRoute ? (
          <AddImportantTask display={show ? "value" : ""} />
        ) : null}
        {plannedRoute ? <AddPlannedTask display={show ? "value" : ""} /> : null}
        {assignedRoute ? <AssignedTask display={show ? "value" : ""} /> : null}
        {mainRoute ? <AddMainTask display={show ? "value" : ""} /> : null}
      </Middle>

      <Left></Left>
    </Container>
  );
};

export default Body;

const Left = styled.div`
  width: 470px;
  display: none;
  height: 100%;
  margin-left: 6px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const MyDayWrap = styled.div``;
const ImportantWrap = styled.div``;
const PlannedWrap = styled.div``;
const AssignedWrap = styled.div``;
const MainTaskWrap = styled.div``;

const BottonIcon = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Mark = styled.div`
  font-size: 20px;
  display: flex;
  color: rgba(37, 99, 207, 0.699);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Botton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30px;
  font-size: 20px;
`;

const NewList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-left: 30px;
`;
const Icon = styled.div`
  cursor: pointer;
  color: rgba(37, 99, 207, 0.699);
  display: flex;
  margin-top: 3px;
  font-size: 20px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;
const Span = styled.span`
  color: rgb(37, 100, 207);
  text-transform: capitalize;
`;

const ToggleMenu = styled.div<{ dn: string }>`
  padding-left: 30px;
  margin-top: 35px;
  font-size: 20px;
  color: rgb(0, 0, 0, 0.7);
  display: ${({ dn }) => (dn ? "block" : "none")};
  cursor: pointer;
`;

const Menu = styled.div`
  padding-left: 30px;
  margin-top: 35px;
  font-size: 20px;
  color: rgb(0, 0, 0, 0.7);
  cursor: pointer;
`;

const Right = styled.div<{ dn: string }>`
  width: 400px;
  height: 100%;
  display: ${({ dn }) => (dn ? "block" : "none")};
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-right: 5px;
  flex-direction: column;
  overflow: hidden;
`;
const Middle = styled.div<{ wd: string }>`
  width: ${({ wd }) => (wd ? "calc(100%% - 870px)" : "97%")};
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: rgb(250, 249, 248);
`;

const Container = styled.div<{ ai: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: ${({ ai }) => (ai ? "center" : "")};
  height: calc(100vh - 55px);
`;
