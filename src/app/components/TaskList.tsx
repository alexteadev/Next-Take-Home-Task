"use client";

import { useState } from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks: initialTasks }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleTaskDelete = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onTaskDelete={handleTaskDelete} />
      ))}
    </ul>
  );
}
