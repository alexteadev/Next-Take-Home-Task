"use client";

import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function TaskStats() {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="flex justify-between items-center w-[46rem] text-white mb-4">
      <div className="flex items-center gap-2">
        <span className="text-[#4EA8DE] font-bold text-lg">Tasks</span>
        <span className="bg-gray-700 text-white text-sm font-medium px-3 py-1 rounded-full">
          {tasks.length}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[#8284FA] font-bold text-lg">Completed</span>
        <span className="bg-gray-700 text-white text-sm font-medium px-3 py-1 rounded-full">
          {tasks.length === 0 ? tasks.length : `${completedTasks} of ${tasks.length}`}
        </span>
      </div>
    </div>
  );
}
