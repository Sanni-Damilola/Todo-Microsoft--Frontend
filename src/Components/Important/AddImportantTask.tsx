import React from "react";
import { BsStar } from "react-icons/bs";
import AddTask from "../Props/AddTask";

interface props {
  display: string;
}

const AddImportantTask: React.FC<props> = ({ display }) => {
  return (
    <div>
      <AddTask color="" display={display} title="important" icon={<BsStar />} />
    </div>
  );
};

export default AddImportantTask;
