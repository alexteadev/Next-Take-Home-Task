import { Task } from "@/app/types/task";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  selectedTask: Task | null;
}

const initialState: TaskState = {
  selectedTask: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setSelectedTask: (state, action: PayloadAction<Task>) => {
      state.selectedTask = action.payload;
    },
    clearSelectedTask: (state) => {
      state.selectedTask = null;
    },
  },
});

export const { setSelectedTask, clearSelectedTask } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
