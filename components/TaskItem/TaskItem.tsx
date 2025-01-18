import React from "react";

import { Delete, Edit } from "@/Icons";
import { taskTypes } from "@/types";
import { constants } from "@/constant";
import { popupStore, taskStore } from "@/store";

import styles from "./TaskItem.module.scss";
import Button from "../Button/Button";

interface Props {
  task: taskTypes.Task;
}

const TaskItem = (props: Props) => {
  const { task } = props;

  const { updateTask } = taskStore();
  const { setDeletePopupData, setEditPopupData } = popupStore();

  const openDeletPopup = () => {
    setDeletePopupData({
      open: true,
      id: task.id,
    });
  };

  const handleUpdateTask = () => {
    if (task.status === "ACTIVE") {
      updateTask(task.id, { status: "COMPLETED" });
    } else {
      updateTask(task.id, { status: "ACTIVE" });
    }
  };

  const handleEdit = () => {
    setEditPopupData({
      open: true,
      id: task.id,
    });
  };

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
            <p>{constants.STATUS[task.status]}</p>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.editDelete}>
            <div onClick={handleEdit} className={styles.edit}>
              <Edit />
            </div>
            <div onClick={openDeletPopup} className={styles.delete}>
              <Delete />
            </div>
          </div>
          {/* <p onClick={handleUpdateTask}>mark as complted</p> */}
          <Button
            text={
              task.status === "ACTIVE" ? "Mark As Completed" : "Mark As Active"
            }
            variant="text"
            onClick={handleUpdateTask}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
