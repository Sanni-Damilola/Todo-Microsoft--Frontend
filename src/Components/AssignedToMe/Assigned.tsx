import React from "react";
import TaskProps from "../Props/TaskProps";
import { MdOutlinePersonOutline } from "react-icons/md";

interface props {
  blueLine: string;
  background: string;
}

const Assigned: React.FC<props> = ({ background, blueLine }) => {
  return (
    <div>
      <TaskProps
        blueline={blueLine}
        bg={background}
        margin_right="19px"
        font_size="24px"
        text="assigned to me"
        icon={<MdOutlinePersonOutline />}
      />
    </div>
  );
};

export default Assigned;
