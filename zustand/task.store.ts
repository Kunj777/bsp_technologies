import { create } from "zustand";

import { filter } from "lodash";

import { taskTypes } from "@/types";
import { constants } from "@/constant";

interface TaskStore {
  tasks: Array<taskTypes.Task>;
  addNewTask: (data: taskTypes.Task) => void;
  setTasks: (data: Array<taskTypes.Task>) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, data: Partial<taskTypes.Task>) => void;
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
    set((state) => {
      const updatedTasks = [data, ...state.tasks];
      localStorage.setItem(
        constants.LOCAL_STORAGE_KEYS.TASKS,
        JSON.stringify(updatedTasks)
      );

      return {
        ...state,
        tasks: updatedTasks,
      };
    });
  },

  deleteTask: (id) => {
    set((state) => {
      const updatedTasks = filter(state.tasks, (task) => id !== task.id);

      localStorage.setItem(
        constants.LOCAL_STORAGE_KEYS.TASKS,
        JSON.stringify(updatedTasks)
      );

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

      localStorage.setItem(
        constants.LOCAL_STORAGE_KEYS.TASKS,
        JSON.stringify(updatedTasks)
      );

      return {
        ...state,
        tasks: updatedTasks,
      };
    });
  },
}));

export default taskStore;
