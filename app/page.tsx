"use client";
import { useEffect, useState } from "react";

import { AddTaskForm, Button, TaskList } from "@/components";
import { taskStore } from "@/Store";

import styles from "./page.module.css";

export default function Home() {
  const { setTasks } = taskStore();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const data = localStorage.getItem("tasks");

    if (!data) return;
    const tasks = JSON.parse(data);

    setTasks(tasks);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.heading}>Task Management System</p>
        <Button text="Add New Task" onClick={handleClick} />
      </div>

      <TaskList />

      <AddTaskForm handleClose={handleClose} open={open} />
    </div>
  );
}
