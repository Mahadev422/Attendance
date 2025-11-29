import { create } from "zustand";

export const useClass = create((set, get) => ({
  studentList: null,
  sendClass: async (id) => {
    if (!id.trim()) return;
    if(false) return {
      status: true,
      msg: `Class ${id} not found!`,
    };
    return {
      status: true
    }
    
  },
}));
