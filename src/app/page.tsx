"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import TaskStats from "./components/TaskStats";
import TaskList from "./components/TaskList";
import EmptyState from "./components/EmptyState";
import { Task } from "./types/task";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/tasks");
        const data: Task[] = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1A1A1A]">
      <Header
        showButton
        onButtonClick={() => router.push("/create")}
      />
      <div className="w-full flex flex-col items-center px-4 py-20">
        <div className="w-[46rem]">
          <TaskStats tasks={tasks} />
          {tasks.length === 0 ? <EmptyState /> : <TaskList tasks={tasks} />}
        </div>
      </div>
    </div>
  );
}
