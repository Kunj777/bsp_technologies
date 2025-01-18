import { create } from "zustand";

import { taskTypes } from "@/types";

interface TaskStore {
  popupData: taskTypes.Popup;
  setPopupData: (data: taskTypes.Popup) => void;
}

const taskStore = create<TaskStore>((set) => ({
  popupData: {
    open: false,
    id: "",
  },

  setPopupData: (data) => set((state) => ({ ...state, popupData: data })),
}));

export default taskStore;
