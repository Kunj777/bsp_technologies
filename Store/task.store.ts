import { create } from "zustand";

import Task from "@/types/task.types";

interface TaskStore {
  tasks: Array<Task>;
  addNewTask: (data: Task) => void;
  setTasks: (data: Array<Task>) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, data: Partial<Task>) => void;
}

const taskStore = create<TaskStore>((set) => ({
  tasks: [],

  setTasks: (data) => {
    set((state) => ({
      ...state,
      tasks: data,
    }));
  },

  addNewTask: (data) => {
    set((state) => ({
      ...state,
      tasks: [{ ...data }, ...state.tasks],
    }));
  },

  deleteTask: (id) => {
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => id !== task.id);

      return {
        ...state,
        tasks: updatedTasks,
      };
    });
  },

  updateTask: (id, data) => {
    set((state) => {
      const updatedTasks = [];
      for (let i = 0; i < state.tasks.length; i++) {
        if (state.tasks[i].id === id) {
          updatedTasks.push({ ...state.tasks[i], ...data });
        } else updatedTasks.push(state.tasks[i]);
      }

      return {
        ...state,
        tasks: updatedTasks,
      };
    });
  },
}));

export default taskStore;
