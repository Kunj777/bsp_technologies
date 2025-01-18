import React from "react";

import TaskItem from "../TaskItem/TaskItem";
import { taskStore } from "@/Store";

const TaskList = () => {
  const { tasks } = taskStore();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {tasks.length > 0 ? (
        tasks.map((item, id) => {
          return <TaskItem task={item} key={id} />;
        })
      ) : (
        <div>No task</div>
      )}
    </div>
  );
};

export default TaskList;
