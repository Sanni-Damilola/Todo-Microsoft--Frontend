import React from "react";
import { CgHome } from "react-icons/cg";
import AddTask from "../Props/AddTask";
import styled from "styled-components";
import { HiOutlineBell, HiOutlineSun } from "react-icons/hi";
import { RiArrowUpDownLine } from "react-icons/ri";
import { TfiLightBulb } from "react-icons/tfi";
import { IoIosCheckmark } from "react-icons/io";
import { BsStar } from "react-icons/bs";
import { IoCalendarOutline, IoRepeat } from "react-icons/io5";
import axios from "axios";
import { allowAccess } from "../Global/GlobalContest";

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

const AddMainTask: React.FC<props> = ({ display }) => {
  const [show, setShow] = React.useState(false);
  const [title, setTitle] = React.useState("");

  const [showTask, setShowTask] = React.useState(false);

  const context = React.useContext(allowAccess);

  //  post task
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

  React.useEffect(() => {
    readAllTask();
  }, [context?.userData]);

  return (
    <Container>
      <Wrapper>
        <Wrap>
          <Icon>
            <CgHome />
          </Icon>
          <TaskTitle>tasks</TaskTitle>
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
            <>
              <Botton>
                <Hold>
                  <ButtonIcon>
                    <IoCalendarOutline />
                  </ButtonIcon>
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
                  <Add
                    onClick={postTask}
                    color="rgb(37, 99, 207)"
                    cur="pointer"
                  >
                    add
                  </Add>
                )}
              </Botton>
            </>
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
    </Container>
  );
};

export default AddMainTask;

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
`;
