import { create } from "zustand";

import { taskTypes } from "@/types";

interface TaskStore {
  deletePopupData: taskTypes.Popup;
  setDeletePopupData: (data: taskTypes.Popup) => void;

  editPopupData: taskTypes.Popup;
  setEditPopupData: (data: taskTypes.Popup) => void;
}

const taskStore = create<TaskStore>((set) => ({
  deletePopupData: {
    open: false,
    id: "",
  },

  editPopupData: {
    open: false,
    id: "",
  },

  setDeletePopupData: (data) =>
    set((state) => ({ ...state, deletePopupData: data })),

  setEditPopupData: (data) =>
    set((state) => ({ ...state, editPopupData: data })),
}));

export default taskStore;
