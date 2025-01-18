import React from "react";

import { Box, Modal, Typography } from "@mui/material";

import Button from "../Button/Button";
import { popupStore, taskStore } from "@/store";

import styles from "./deletePopup.module.scss";

const DeletePopup = () => {
  const { deleteTask } = taskStore();
  const { setDeletePopupData, deletePopupData } = popupStore();

  const handleDelete = () => {
    //modal karna hai
    deleteTask(deletePopupData.id);
    setDeletePopupData({ open: false, id: "" });
  };

  const handleClosePopup = () => {
    setDeletePopupData({ open: false, id: "" });
  };

  return (
    <Modal open={deletePopupData.open} onClose={handleClosePopup}>
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
        <Typography
          sx={{
            fontSize: "18px",
            mb: "20px",
            textAlign: "center",
            whiteSpace: "pre-wrap",
          }}
        >
          {`Are you sure, \nyou want to delete this task?`}
        </Typography>
        <div className={styles.btns}>
          <Button
            text="Cancel"
            onClick={handleClosePopup}
            width="150px"
            variant="outlined"
          ></Button>
          <Button text="Delete" onClick={handleDelete} width="150px"></Button>
        </div>
      </Box>
    </Modal>
  );
};

export default DeletePopup;
