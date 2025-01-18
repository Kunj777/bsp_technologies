"use client";
import { useEffect, useState } from "react";

import { AddTaskForm, Button, DeletePopup, TaskList } from "@/components";
import { constants } from "@/constant";
import { taskStore } from "@/store";

import styles from "./page.module.scss";

export default function Home() {
  const { setTasks } = taskStore();

  const [open, setOpen] = useState(false);

  const handleAddNewTask = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const data = localStorage.getItem(constants.LOCAL_STORAGE_KEYS.TASKS);

    if (!data) return;
    const tasks = JSON.parse(data);

    setTasks(tasks);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.heading}>Task Management System</p>
        <Button text="Add New Task" onClick={handleAddNewTask} />
      </div>

      <TaskList />

      <AddTaskForm handleClose={handleClose} open={open} />
      <DeletePopup />
    </div>
  );
}
