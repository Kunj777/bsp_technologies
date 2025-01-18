import React from "react";

import { TextField } from "@mui/material";

interface Input {
  onChange: (
    value: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void | React.Dispatch<React.SetStateAction<string>>;
  value: string;
  error?: string;
  width?: string;
  label?: string;
}

const Input: React.FC<Input> = (props) => {
  const { onChange, value, error, width, label } = props;

  return (
    <TextField
      label={label}
      variant="outlined"
      onChange={onChange}
      value={value}
      error={error ? true : false}
      helperText={error}
      sx={{
        width: width,
        mb: "12px",
      }}
    />
  );
};

export default Input;
