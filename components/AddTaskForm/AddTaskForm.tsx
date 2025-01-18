import React, { useState } from "react";

import { Box, FormControl, Modal } from "@mui/material";

import Input from "../Input/Input";
import Button from "../Button/Button";
import taskStore from "@/Store/task.store";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddTaskForm = (props: Props) => {
  const { open, handleClose } = props;

  const { addNewTask } = taskStore();

  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setError("");
    setTask(e.target.value);
  };

  const handleClick = () => {
    if (!task) {
      setError("Please enter Task");
      return;
    }

    addNewTask({ name: task, id: generateRandomID(), status: "PENDING" });
    handleClose();
    setTask("");
    // localStorage.setItem("tasks", tasks);
  };

  function generateRandomID() {
    return Math.random().toString(36).slice(2, 12); // Example: 'g5k8hd12c'
  }

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
        setError("");
        setTask("");
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <p>New Task</p>

        <FormControl onSubmit={handleClick}>
          <Input onChange={onChange} value={task} error={error} />
          <Button text="Add Task" onClick={handleClick} />
        </FormControl>
      </Box>
    </Modal>
  );
};

export default AddTaskForm;
