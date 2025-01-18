"use client";
import { useEffect, useState } from "react";

import {
  AddTaskForm,
  Button,
  DeletePopup,
  Loader,
  TaskList,
} from "@/components";
import { constants } from "@/constant";
import { popupStore, taskStore } from "@/zustand";

import styles from "./page.module.scss";

export default function Home() {
  const { setTasks } = taskStore();
  const { setEditPopupData } = popupStore();

  const [loading, setLoading] = useState(true);

  const handleAddNewTask = () => {
    setEditPopupData({
      open: true,
      id: "",
    });
  };

  useEffect(() => {
    const data = localStorage.getItem(constants.LOCAL_STORAGE_KEYS.TASKS);

    if (!data) {
      setLoading(false);
      return;
    }
    const tasks = JSON.parse(data);

    setTasks(tasks);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader isLoading />;
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.heading}>Task Management System</p>
        <Button text="Add Task" onClick={handleAddNewTask} />
      </div>

      <div>
        <TaskList />
      </div>

      <AddTaskForm />
      <DeletePopup />
    </div>
  );
}
