import React from "react";

import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";

interface Props {
  date: dayjs.Dayjs | null;
  setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>;
}

const DatePicker = (props: Props) => {
  const { date, setDate } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DatePicker"]}
        sx={{
          mb: "12px",
        }}
      >
        <MuiDatePicker
          label="Due Date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          sx={{
            width: "275px",
          }}
          minDate={dayjs(new Date())}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePicker;
