import dayjs from "dayjs";

interface Task {
  name: string;
  id: string;
  status: STATUS;
  dueDate?: dayjs.Dayjs | null;
}

export type STATUS = "PENDING" | "COMPLETED";

export default Task;
