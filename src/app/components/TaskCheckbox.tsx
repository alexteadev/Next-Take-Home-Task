"use client";

import { HiCheck } from "react-icons/hi";

interface TaskCheckboxProps {
  completed: boolean;
  onToggle: () => void;
}

export default function TaskCheckbox({ completed, onToggle }: TaskCheckboxProps) {
  return (
    <label
      className="relative flex items-center justify-center w-6 h-6 cursor-pointer"
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={completed}
        onChange={onToggle}
      />
      <span className="absolute w-full h-full rounded-full border-2 border-blue-500 peer-checked:border-indigo-500"></span>
      <HiCheck className="w-4 h-4 text-indigo-500 hidden peer-checked:block" />
    </label>
  );
}
