interface Task {
  name: string;
  id: string;
  status: "PENDING" | "COMPLETED";
}

export default Task;
