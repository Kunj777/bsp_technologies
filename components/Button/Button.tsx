import React from "react";

import { Button as ButtonMui } from "@mui/material";

interface Props {
  text: string;
  onClick: () => void;
  width?: string;
  type?: "button" | "submit" | "reset";
  variant?: "text" | "contained" | "outlined";
}

const Button: React.FC<Props> = (props) => {
  const { text, onClick, width, type, variant } = props;

  return (
    <div>
      <ButtonMui
        type={type || "button"}
        variant={variant || "contained"}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        sx={{
          // height: "40px",
          width: width,
        }}
      >
        {text}
      </ButtonMui>
    </div>
  );
};

export default Button;
