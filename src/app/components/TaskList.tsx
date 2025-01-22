"use client";

import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import { Task } from "../types/task";
import { RootState } from "@/store";
import { deleteTask, updateTask } from "@/store/taskSlice";

export default function TaskList() {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const dispatch = useDispatch();

  const handleTaskDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleTaskUpdate = (id: number, updatedTask: Partial<Task>) => {
    dispatch(updateTask({ id, updatedTask }));
  };

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskDelete={handleTaskDelete}
          onTaskUpdate={handleTaskUpdate}
        />
      ))}
    </ul>
  );
}
