import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import AddTask from "../Props/AddTask";
interface props {
  display: string;
}

const AddPlannedTask: React.FC<props> = ({ display }) => {
  return (
    <div>
      <AddTask
        color=""
        display={display}
        title="planned"
        icon={<IoCalendarOutline />}
      />
    </div>
  );
};

export default AddPlannedTask;
