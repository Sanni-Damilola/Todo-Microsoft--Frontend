import React from "react";
import { HiOutlineSun } from "react-icons/hi";
import AddTask from "../Props/AddTask";

interface props {
  display: string;
}

const AddTaskMyday: React.FC<props> = ({ display }) => {
  return (
    <div>
      <AddTask
        color="black"
        display={display}
        title="my day"
        icon={<HiOutlineSun />}
      />
    </div>
  );
};

export default AddTaskMyday;
