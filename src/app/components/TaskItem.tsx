"use client";

import { useRouter } from "next/navigation";
import { HiCheck, HiOutlineTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Task } from "../types/task";
import { setSelectedTask } from "@/store/taskSlice";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleTaskClick = () => {
    dispatch(setSelectedTask(task));
    router.push(`/edit`);
  };

  return (
    <li
      onClick={handleTaskClick}
      className="flex justify-between items-center bg-[#2A2A2A] rounded-lg p-4 shadow-lg cursor-pointer hover:bg-[#3A3A3A] transition"
    >
      <div className="flex items-center gap-4">
        <label className="relative flex items-center justify-center w-6 h-6 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            defaultChecked={task.completed}
            onClick={(e) => e.stopPropagation()}
          />
          <span className="absolute w-full h-full rounded-full border-2 border-blue-500 peer-checked:border-indigo-500"></span>
          <HiCheck className="w-4 h-4 text-indigo-500 hidden peer-checked:block" />
        </label>

        <p
          className={`text-sm ${
            task.completed ? "line-through text-gray-500" : "text-white"
          }`}
        >
          {task.title}
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("Delete task:", task.id);
        }}
        className="text-gray-500 hover:text-red-500"
      >
        <HiOutlineTrash size={24} />
      </button>
    </li>
  );
}
