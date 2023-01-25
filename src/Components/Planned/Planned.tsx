import React from "react";
import TaskProps from "../Props/TaskProps";
import { IoCalendarOutline } from "react-icons/io5";

interface props {
  blueLine: string;
  background: string;
}

const Planned: React.FC<props> = ({ background,blueLine }) => {
  return (
    <TaskProps
      bg=""
      blueline={blueLine}
      margin_right="23px"
      font_size="20px"
      text="planned"
      icon={<IoCalendarOutline />}
    />
  );
};

export default Planned;
