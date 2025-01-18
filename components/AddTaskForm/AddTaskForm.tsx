import React, { useState } from "react";

import { Box, Modal, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { v4 as uuidv4 } from "uuid";

import { Close } from "@/Icons";
import Input from "../Input/Input";
import Button from "../Button/Button";
import DatePicker from "../DatePicker/DatePicker";
import { taskTypes } from "@/types";
import { taskStore } from "@/store";

import styles from "./addTaskForm.module.scss";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const AddTaskForm = (props: Props) => {
  const { open, handleClose } = props;

  const { addNewTask } = taskStore();

  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState<Dayjs | null>(null);
  const [error, setError] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setError("");
    setTask(e.target.value);
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!task) {
      setError("Please enter Task Name");
      return;
    }

    const data = {
      name: task,
      id: uuidv4(),
      status: "ACTIVE" as taskTypes.Status,
      dueDate: dueDate,
    };
    addNewTask(data);
    handleClose();
    setTask("");
    setDueDate(null);
  };

  const handleClosePopup = () => {
    handleClose();
    setError("");
    setTask("");
    setDueDate(null);
  };

  return (
    <Modal open={open} onClose={handleClosePopup}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <div className={styles.modalContent}>
          <Typography sx={{ fontSize: "24px" }}>New Task</Typography>
          <div style={{ cursor: "pointer" }} onClick={handleClosePopup}>
            <Close />
          </div>
        </div>

        <Box component="form" onSubmit={handleAddTask}>
          <Input
            onChange={onChange}
            value={task}
            error={error}
            width={"335px"}
            label="Task Name"
          />

          {/* <Input
            onChange={onChange}
            value={task}
            error={error}
            width={"320px"}
            label="Project Name"
          /> */}

          <DatePicker date={dueDate} setDate={setDueDate} />
          <div className={styles.btn}>
            <Button
              type="submit"
              text="Add Task"
              onClick={handleAddTask}
              width="335px"
            />
          </div>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddTaskForm;
