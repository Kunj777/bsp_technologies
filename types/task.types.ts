import dayjs from "dayjs";

export interface Task {
  name: string;
  id: string;
  status: Status;
  dueDate?: dayjs.Dayjs | null;
}

export interface Popup {
  open: boolean;
  id: string;
}

export type Status = "ACTIVE" | "COMPLETED";
