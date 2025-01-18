import React from "react";

import Task from "@/types/task.types";
import { taskStore } from "@/Store";

import styles from "./TaskItem.module.scss";
import { Delete, Edit } from "@/Icons";

interface Props {
  task: Task;
}

const TaskItem = (props: Props) => {
  const { task } = props;

  const { deleteTask, updateTask } = taskStore();

  const handleDelete = () => {
    //modal karna hai
    deleteTask(task.id);
  };

  const handleUpdateTask = () => {
    updateTask(task.id, { status: "COMPLETED" });
  };

  const handleEdit = () => {};

  return (
    <div className={styles.TaskItem}>
      <div className={styles.card}>
        <div className={styles.cardInfo}>
          <div className={styles.task}>
            <p className={styles.name}>Task Name :- </p>
            <p>{task.name}</p>
          </div>
          {task.dueDate && (
            <div className={styles.task}>
              <p className={styles.name}>Due Date :- </p>
              <p>{new Date(task.dueDate).toLocaleDateString()}</p>
            </div>
          )}
          <div className={styles.task}>
            <p className={styles.name}>Task Status :- </p>
            <p>{task.status}</p>
          </div>
        </div>
        <div className={styles.actions}>
          <div onClick={handleEdit}>
            <Edit />
          </div>
          <div onClick={handleDelete}>
            <Delete />
          </div>
          <p onClick={handleUpdateTask}>mark as complted</p>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
