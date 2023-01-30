import React from "react";
import { HiOutlineBell, HiOutlineSun } from "react-icons/hi";
import { RiArrowUpDownLine } from "react-icons/ri";
import { TfiLightBulb } from "react-icons/tfi";
import styled from "styled-components";
import { IoCalendarOutline, IoRepeat } from "react-icons/io5";
import { BsCalendarPlus, BsStar } from "react-icons/bs";
import { IoIosCheckmark } from "react-icons/io";
import axios from "axios";
import { allowAccess } from "../Global/GlobalContest";
import { MdOutlineToday } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

interface props {
  display: string;
}

type task = {
  _id: string;
  title: string;
  date: number;
  reminder: string;
  note: string;
  status: boolean;
};

interface allUserTask {
  status: false;
  title: string;
  note: string;
  myDay: task[];
  task: task[];
  _id: string;
}

const AddTaskMyday: React.FC<props> = ({ display }) => {
  const [show, setShow] = React.useState(false);
  const [title, setTitle] = React.useState("");

  const [showTask, setShowTask] = React.useState(false);

  const context = React.useContext(allowAccess);

  // const getId = (id: string) => {
  //   id :
  //   return id
  // }

  // post task
  const postTask = async () => {
    await axios
      .post(`http://localhost:2001/api/createTask/${context?.userData._id}`, {
        title,
      })
      .then((res) => {});
  };

  // read task
  // get all task
  const [userTask, setUserTask] = React.useState({} as allUserTask);
  const readAllTask = async () => {
    await axios
      .get(`http://localhost:2001/api/getone/${context?.userData._id}`)
      .then((res) => {
        setUserTask(res.data.data);
      });
  };

  const func = () => {
    setShow(true);
  };

  const addTask = () => {
    setShowTask(true);
  };

  const [date, setDate] = React.useState(false);
  const dateToggle = () => {
    setDate(!date);
  };
  const [Today, setToday] = React.useState(false);
  const todayToggle = () => {
    setToday(true);
    setNextWeek(false);
    setTomorrow(false);
    setBorder(true);
  };
  const [tomorrow, setTomorrow] = React.useState(false);
  const tomorrowToggle = () => {
    setTomorrow(true);
    setToday(false);
    setNextWeek(false);
    setBorder(true);
  };
  const [nextWeek, setNextWeek] = React.useState(false);
  const nextWeekToggle = () => {
    setNextWeek(true);
    setToday(false);
    setTomorrow(false);
    setBorder(true);
  };

  // border for Date Icon
  const [border, setBorder] = React.useState(false);

  React.useEffect(() => {
    readAllTask();
  }, [context?.userData]);

  return (
    <Container>
      <Wrapper>
        <Wrap>
          <Icon>
            <HiOutlineSun />
          </Icon>
          <TaskTitle>my day</TaskTitle>
        </Wrap>
        <SortWrapAndSuggest>
          <Sort>
            <SortIcon>
              <RiArrowUpDownLine />
            </SortIcon>
            <Text>sort</Text>
          </Sort>
          <Suggestions>
            <SuggestIcon>
              <TfiLightBulb />
            </SuggestIcon>
            <Text>suggestions</Text>
          </Suggestions>
        </SortWrapAndSuggest>
      </Wrapper>
      <br />
      <br />
      <MainWrapper>
        <>
          <AddTaskInput>
            <Radio></Radio>
            <Input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              color={show ? "value" : ""}
              onClick={func}
              placeholder="Add a Task"
            />
          </AddTaskInput>
          {show ? (
            <Botton>
              <Hold>
                <DateView border={border ? "value" : ""} onClick={dateToggle}>
                  <IoCalendarOutline />
                  {Today ? <DateText>today</DateText> : null}
                  {tomorrow ? <DateText>tomorrow</DateText> : null}
                  {nextWeek ? <DateText>Due Tue, Febuary 7</DateText> : null}
                </DateView>

                <ButtonIcon>
                  <HiOutlineBell />
                </ButtonIcon>
                <ButtonIcon>
                  <IoRepeat />
                </ButtonIcon>
              </Hold>

              {title === "" ? (
                <Add color=" rgb(0, 0, 0, 0.5)" cur="not-allowed">
                  add
                </Add>
              ) : (
                <Add onClick={postTask} color="rgb(37, 99, 207)" cur="pointer">
                  add
                </Add>
              )}
            </Botton>
          ) : null}
          {showTask ? (
            <TaskView>
              <ViewWrapper>
                <CheckBox>
                  <CheckIcon>
                    <IoIosCheckmark />
                  </CheckIcon>
                </CheckBox>
                <TitleHold>
                  <TaskViewTitle></TaskViewTitle>
                  <Task>task</Task>
                </TitleHold>
              </ViewWrapper>
              <MarkAsImportant>
                <BsStar />
              </MarkAsImportant>
            </TaskView>
          ) : null}
          {userTask?.myDay?.map((e) => (
            <TaskView key={e._id}>
              <ViewWrapper>
                <CheckBox>
                  <CheckIcon>
                    <IoIosCheckmark />
                  </CheckIcon>
                </CheckBox>
                <TitleHold>
                  <TaskViewTitle>{e.title}</TaskViewTitle>
                  <Task>task</Task>
                </TitleHold>
              </ViewWrapper>
              <MarkAsImportant>
                <BsStar />
              </MarkAsImportant>
            </TaskView>
          ))}
        </>
      </MainWrapper>
      {date ? (
        <DateWrapper>
          <Due>due</Due>
          <DateHold onClick={todayToggle}>
            <DateIcon>
              <MdOutlineToday />
              <Day>Today</Day>
            </DateIcon>
            <CurrentDay>mon</CurrentDay>
          </DateHold>
          <DateHold onClick={tomorrowToggle}>
            <DateIcon>
              <MdOutlineToday />
              <Day>Tomorrow</Day>
            </DateIcon>
            <CurrentDay>tue</CurrentDay>
          </DateHold>
          <DateHold onClick={nextWeekToggle}>
            <DateIcon>
              <MdOutlineToday />
              <Day>Next week</Day>
            </DateIcon>
            <CurrentDay>mon</CurrentDay>
          </DateHold>
          <PickADate type={"date"} />
          <Delete>
            <RiDeleteBinLine />
            <DeleteDay>Delete due date</DeleteDay>
          </Delete>
        </DateWrapper>
      ) : null}
    </Container>
  );
};

export default AddTaskMyday;

const DateView = styled.div<{ border: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  cursor: pointer;
  margin-right: 18px;
  padding: 4px;
  color: rgb(0, 0, 0, 0.5);
  border: 1px solid
    ${({ border }) => (border ? " rgba(0, 0, 0, 0.3)" : "transparent")};
  border-radius: 4px;
`;

const DateText = styled.div`
  font-weight: 400;
  margin-left: 9px;
  font-size: 15px;
  text-transform: capitalize;
  color: rgb(0, 0, 0, 0.8);
`;

const PickADate = styled.input`
  margin-left: 20px;
  margin-bottom: 10px;
`;

const DeleteDay = styled.div`
  font-size: 16px;
  margin-left: 30px;
`;

const Delete = styled.div`
  display: flex;
  cursor: pointer;
  :hover {
    background-color: lavender;
  }
  height: 40px;
  align-items: center;
  margin-bottom: 9px;
  color: red;
  margin-left: 14px;
`;

const DateWrapper = styled.div`
  position: fixed;
  background-color: white;
  width: 210px;
  top: 33%;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding-bottom: 10px;
`;
const Due = styled.div`
  display: flex;
  font-weight: 500;
  color: black;
  font-size: 16px;
  text-transform: capitalize;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 7px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
const DateHold = styled.div`
  display: flex;
  cursor: pointer;
  :hover {
    background-color: lavender;
  }
  height: 40px;
  align-items: center;
  margin-bottom: 9px;
  justify-content: space-between;
`;
const DateIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 19px;
  font-size: 18px;
  color: rgb(0, 0, 0, 0.6);
`;

const Day = styled.div`
  font-weight: 400;
  margin-left: 12px;
  font-size: 16px;
  color: rgb(0, 0, 0, 0.8);
`;

const CurrentDay = styled.div`
  font-weight: 400;
  color: rgb(0, 0, 0, 0.8);
  margin-right: 7px;
  text-transform: capitalize;
`;

const MainWrapper = styled.div`
  overflow-y: scroll;
  height: auto;
  width: 100%;
  padding-bottom: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TaskViewTitle = styled.span`
  color: rgb(0, 0, 0, 0.6);
`;

const CheckIcon = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  color: rgb(37, 99, 207);
  /* display: none; */
`;

const MarkAsImportant = styled.div`
  color: rgb(37, 99, 207);
  margin-right: 24px;
  cursor: pointer;
  font-size: 19px;
`;
const Task = styled.p`
  text-transform: capitalize;
  color: rgb(0, 0, 0, 0.7);
  font-size: 13px;
  margin: 0;
  float: left;
`;
const TitleHold = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;
const CheckBox = styled.div`
  width: 17px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid rgb(37, 99, 207);
  height: 17px;
  margin-left: 28px;

  :hover ~ ${CheckIcon} {
    color: white;
  }
`;
const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TaskView = styled.div`
  background-color: #eff6fb;
  height: 60px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  align-items: center;
  margin-top: 10px;
  width: 98%;
`;

const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  cursor: pointer;
  margin-right: 18px;
  color: rgb(0, 0, 0, 0.5);
`;

const Radio = styled.div`
  width: 17px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid rgb(37, 99, 207);
  height: 17px;
  margin-left: 28px;
`;

const SortIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 3px;
  margin-right: 5px;
`;
const SuggestIcon = styled.div`
  display: flex;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 3px;
`;

const Wrap = styled.div`
  display: flex;
  color: #2564cf;
  justify-content: center;
  align-items: center;
  position: relative;
  ::before {
    content: "${new Date().toDateString()}";
    position: absolute;
    bottom: -23px;
    width: 150px;
    z-index: 1;
    font-size: 13px;
    color: rgb(0, 0, 0, 0.7);
    text-transform: capitalize;
    left: 10%;
  }
`;
const Suggestions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Sort = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.span`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 400;
  margin-right: 45px;
`;
const SortWrapAndSuggest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(37, 99, 207);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
`;

const Icon = styled.div`
  display: flex;
  margin-top: 3px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-left: 10px;
  margin-right: 10px;
`;

const TaskTitle = styled.span`
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 500;
  cursor: default;
`;

// const Date = styled.p``;
const AddTaskInput = styled.div`
  width: 98%;
  height: 60px;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;
// const Plus = styled.div`
//   display: flex;
//   color: rgba(37, 99, 207, 0.699);
//   justify-content: center;
//   align-items: center;
//   margin-top: 3px;
// `;
const Input = styled.input<{ color: string }>`
  margin-left: 15px;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  flex: 1;
  outline: none;
  border: 0;

  ::placeholder {
    color: ${({ color }) => (color ? "rgb(37, 99, 207)" : "")};
  }
`;
const Botton = styled.div`
  display: flex;
  width: 98%;
  align-items: center;
  margin-top: 7px;
  height: 45px;
  justify-content: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  margin-left: 27px;
`;
const Add = styled.div<{ cur: string; color: string }>`
  padding: 6px;
  font-size: 14px;
  color: ${(color) => color.color};
  cursor: ${(cur) => cur.cur};
  font-weight: 500;
  margin-right: 20px;
  text-transform: capitalize;
  border: 1px solid rgb(0, 0, 0, 0.2);
`;
const Container = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  position: relative;
`;
