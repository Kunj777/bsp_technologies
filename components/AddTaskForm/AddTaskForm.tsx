import React, { useState } from "react";

import { Box, FormControl, Modal, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { v4 as uuidv4 } from "uuid";

import { Close } from "@/Icons";
import Input from "../Input/Input";
import Button from "../Button/Button";
import DatePicker from "../DatePicker/DatePicker";
import taskStore from "@/Store/task.store";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const AddTaskForm = (props: Props) => {
  const { open, handleClose } = props;

  const { tasks, addNewTask } = taskStore();

  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState<Dayjs | null>(null);
  const [error, setError] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setError("");
    setTask(e.target.value);
  };

  const handleClick = () => {
    if (!task) {
      setError("Please enter Task Name");
      return;
    }

    const data = {
      name: task,
      id: uuidv4(),
      status: "PENDING",
      dueDate: dueDate,
    };
    addNewTask(data);
    handleClose();
    setTask("");
    setDueDate(null);

    const taskToStore = [data, ...tasks];

    localStorage.setItem("tasks", JSON.stringify(taskToStore));
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
        setError("");
        setTask("");
        setDueDate(null);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <Typography sx={{ fontSize: "24px" }}>New Task</Typography>
          <div style={{ cursor: "pointer" }} onClick={handleClose}>
            <Close />
          </div>
        </div>

        <FormControl onSubmit={handleClick}>
          <Input
            onChange={onChange}
            value={task}
            error={error}
            width={"330px"}
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

          <Button text="Add Task" onClick={handleClick} width="330px" />
        </FormControl>
      </Box>
    </Modal>
  );
};

export default AddTaskForm;
