"use client";
import { useState } from "react";

import { AddTaskForm, Button, TaskList } from "@/components";

import styles from "./page.module.css";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.page}>
      <p>Task Management System</p>
      <p>Add tasks</p>
      <Button text="New Task" onClick={handleClick} />

      <AddTaskForm handleClose={handleClose} open={open} />

      <TaskList />
    </div>
  );
}
