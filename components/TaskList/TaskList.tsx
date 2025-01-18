import React from "react";

import TaskItem from "../TaskItem/TaskItem";
import { taskStore } from "@/Store";

const TaskList = () => {
  const { tasks } = taskStore();

  return (
    <div>
      {tasks.map((item, id) => {
        return <TaskItem task={item} key={id} />;
      })}
    </div>
  );
};

export default TaskList;
