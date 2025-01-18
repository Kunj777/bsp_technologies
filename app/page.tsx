"use client";
import { useEffect } from "react";

import { AddTaskForm, Button, DeletePopup, TaskList } from "@/components";
import { constants } from "@/constant";
import { popupStore, taskStore } from "@/store";

import styles from "./page.module.scss";

export default function Home() {
  const { setTasks } = taskStore();
  const { setEditPopupData } = popupStore();

  // const [open, setOpen] = useState(false);

  const handleAddNewTask = () => {
    setEditPopupData({
      open: true,
      id: "",
    });
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

      <AddTaskForm />
      <DeletePopup />
    </div>
  );
}
