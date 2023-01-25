import React from "react";
import TaskProps from "../Props/TaskProps";
import { HiOutlineSun } from "react-icons/hi";

interface props {
  blueLine: string;
  background: string;
}

const MyDay: React.FC<props> = ({ background, blueLine }) => {
  return (
    <div>
      <TaskProps
        bg={background}
        blueline={blueLine}
        margin_right="23px"
        font_size="20px"
        text="my day"
        icon={<HiOutlineSun />}
      />
    </div>
  );
};

export default MyDay;
