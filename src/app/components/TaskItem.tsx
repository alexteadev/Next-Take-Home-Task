"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Task } from "../types/task";
import TaskCheckbox from "./TaskCheckbox";
import DeleteConfirmation from "./DeleteConfirmation";
import { setSelectedTask, updateTask } from "@/store/taskSlice";

interface TaskItemProps {
  task: Task;
  onTaskDelete: (id: number) => void;
  onTaskUpdate: (id: number, updatedTask: Partial<Task>) => void;
}

export default function TaskItem({ task, onTaskDelete, onTaskUpdate }: TaskItemProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleTaskClick = () => {
    dispatch(setSelectedTask(task));
    router.push(`/edit`);
  };

  const toggleCompletion = async () => {
    try {
      await fetch(`http://localhost:3001/api/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !isCompleted }),
      });
      setIsCompleted(!isCompleted);
      onTaskUpdate(task.id, { completed: !isCompleted });
      dispatch(updateTask({ id: task.id, updatedTask: { completed: !isCompleted } }));
    } catch (error) {
      console.error("Failed to toggle task completion:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3001/api/tasks/${task.id}`, {
        method: "DELETE",
      });
      onTaskDelete(task.id);
      setShowConfirmation(false);
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <>
      <li
        onClick={handleTaskClick}
        className="flex justify-between items-center bg-[#2A2A2A] rounded-lg p-4 shadow-lg cursor-pointer hover:bg-[#3A3A3A] transition"
      >
        <div className="flex items-center gap-4">
          <TaskCheckbox completed={isCompleted} onToggle={toggleCompletion} />
          <p
            className={`text-sm ${
              isCompleted ? "line-through text-gray-500" : "text-white"
            }`}
          >
            {task.title}
          </p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowConfirmation(true);
          }}
          className="text-gray-500 hover:text-red-500"
        >
          <HiOutlineTrash size={24} />
        </button>
      </li>
      {showConfirmation && (
        <DeleteConfirmation
          onConfirm={handleDelete}
          onCancel={() => setShowConfirmation(false)}
        />
      )}
    </>
  );
}
