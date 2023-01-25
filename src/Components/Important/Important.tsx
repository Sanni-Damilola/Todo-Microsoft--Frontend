import React from "react";
import { BsStar } from "react-icons/bs";
import TaskProps from "../Props/TaskProps";

interface props {
  blueLine: string;
  background: string;
}

const Important: React.FC<props> = ({ background, blueLine }) => {
  return (
    <div>
      <TaskProps
        blueline={blueLine}
        bg={background}
        margin_right="23px"
        font_size="20px"
        text="important"
        icon={<BsStar />}
      />
    </div>
  );
};

export default Important;
