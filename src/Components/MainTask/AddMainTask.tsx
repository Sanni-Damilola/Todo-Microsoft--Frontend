import React from "react";
import { CgHome } from "react-icons/cg";
import AddTask from "../Props/AddTask";

interface props {
  display: string;
}

const AddMainTask: React.FC<props> = ({ display }) => {
  return (
    <div>
      <AddTask color="" display={display} title="task" icon={<CgHome />} />
    </div>
  );
};

export default AddMainTask;
