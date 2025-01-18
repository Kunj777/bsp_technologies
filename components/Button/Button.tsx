import React from "react";

import { Button as ButtonMui } from "@mui/material";

interface Props {
  text: string;
  onClick: () => void;
  width?: string;
}

const Button: React.FC<Props> = (props) => {
  const { text, onClick, width } = props;

  return (
    <div>
      <ButtonMui
        variant="outlined"
        onClick={onClick}
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
