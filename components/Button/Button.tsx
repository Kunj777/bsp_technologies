import React from "react";

import { Button as ButtonMui } from "@mui/material";

interface Props {
  text: string;
  onClick: () => void;
}

const Button: React.FC<Props> = (props) => {
  const { text, onClick } = props;

  return (
    <div>
      <ButtonMui
        variant="outlined"
        onClick={onClick}
        sx={{
          height: "40px",
          width: "150px",
        }}
      >
        {text}
      </ButtonMui>
    </div>
  );
};

export default Button;
