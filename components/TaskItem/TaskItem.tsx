import React from "react";

import Task from "@/types/task.types";
import { taskStore } from "@/Store";

interface Props {
  task: Task;
}

const TaskItem = (props: Props) => {
  const { task } = props;

  const { deleteTask, updateTask } = taskStore();

  const handleDelete = () => {
    deleteTask(task.id);
    // localStorage.setItem()
  };

  const handleUpdateTask = () => {
    updateTask(task.id, { status: "COMPLETED" });
    // localStorage.setItem()
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p>{task.name}</p>
      {/* <p>{task.status}</p>
      <p onClick={handleDelete}>delete</p>
      <p onClick={handleUpdateTask}>mark as complted</p> */}
    </div>
  );
};

export default TaskItem;
