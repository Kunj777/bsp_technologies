import React, { useEffect, useState } from "react";

import { Box, Modal, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { find, size } from "lodash";

import { Close } from "@/Icons";
import Input from "../Input/Input";
import Button from "../Button/Button";
import DatePicker from "../DatePicker/DatePicker";
import { taskTypes } from "@/types";
import { popupStore, taskStore } from "@/zustand";

import styles from "./addTaskForm.module.scss";

const AddTaskForm = () => {
  const { addNewTask, tasks, updateTask } = taskStore();
  const { setEditPopupData, editPopupData } = popupStore();

  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState<Dayjs | null>(null);
  const [error, setError] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setError("");
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (!task) {
      setError("Please enter Task Name");
      return;
    }

    if (size(task) > 56) {
      setError("Max limit is 56 characters");
      return;
    }

    if (!editPopupData.id) {
      const data = {
        name: task,
        id: uuidv4(),
        status: "ACTIVE" as taskTypes.Status,
        dueDate: dueDate,
      };
      addNewTask(data);
    } else {
      const data = {
        name: task,
        dueDate: dueDate,
      };

      updateTask(editPopupData.id, data);
    }

    handleClosePopup();
  };

  const handleClosePopup = () => {
    setEditPopupData({
      open: false,
      id: "",
    });
    setError("");
    setTask("");
    setDueDate(null);
  };

  useEffect(() => {
    if (!editPopupData.id) return;

    const task = find(tasks, (item) => editPopupData.id === item.id);

    if (!task) return;

    setTask(task.name);
    if (task.dueDate) setDueDate(dayjs(task.dueDate));
  }, [editPopupData]);

  return (
    <Modal open={editPopupData.open} onClose={handleClosePopup}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 340,
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <div className={styles.modalContent}>
          <Typography sx={{ fontSize: "24px" }}>
            {!editPopupData.id ? "New Task" : "Edit Task"}
          </Typography>
          <div style={{ cursor: "pointer" }} onClick={handleClosePopup}>
            <Close />
          </div>
        </div>

        <Box component="form" onSubmit={handleAddTask}>
          <Input
            onChange={onChange}
            value={task}
            error={error}
            width={"275px"}
            label="Task Name"
          />

          <DatePicker date={dueDate} setDate={setDueDate} />
          <div className={styles.btn}>
            <Button
              type="submit"
              text={!editPopupData.id ? "Add Task" : "Save"}
              onClick={handleAddTask}
              width="275px"
            />
          </div>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddTaskForm;
