import React from "react";
import { useRoutes } from "react-router-dom";
import AssignedTask from "../AssignedToMe/AssignedTask";
import AddImportantTask from "../Important/AddImportantTask";
import AddMainTask from "../MainTask/AddMainTask";
import AddPlannedTask from "../Planned/AddPlannedTask";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Task from "../Task/Task";

const Routes = () => {
  const element = useRoutes([
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/task",
      element: <Task />,
    },
    // {
    //   path: "/task",
    //   children: [ 
    //     {
    //       index: true,
    //       element: <Task />,
    //     },
    //     {
    //       path: "important",
    //       element: <AddImportantTask />,
    //     },
    //     {
    //       path: "assigned",
    //       element: <AssignedTask  />,
    //     },
    //     {
    //       path: "planned",
    //       element: <AddPlannedTask />,
    //     },
    //     {
    //       path: "mainTask",
    //       element: <AddMainTask />,
    //     },
    //   ],
    // },
  ]);

  return element;
};

export default Routes;
