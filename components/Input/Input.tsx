import React from "react";

import { TextField } from "@mui/material";

interface Input {
  onChange: (
    value: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void | React.Dispatch<React.SetStateAction<string>>;
  value: string;
  error: string;
}

const Input: React.FC<Input> = (props) => {
  const { onChange, value, error } = props;

  return (
    <TextField
      label="Task"
      variant="outlined"
      onChange={onChange}
      value={value}
      error={error ? true : false}
      helperText={error}
      sx={{
        // height: "32px",
        width: "300px",
        mb: "20px",
      }}
    />
  );
};

export default Input;
