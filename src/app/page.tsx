"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";
import { setTasks } from "@/store/taskSlice";
import TaskStats from "./components/TaskStats";
import TaskList from "./components/TaskList";
import Header from "@/components/Header";
import EmptyState from "./components/EmptyState";

export default function Home() {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/tasks");
        const data = await response.json();
        dispatch(setTasks(data));
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasks();
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1A1A1A]">
      <Header
        showButton
        onButtonClick={() => router.push("/create")}
      />
      <div className="w-full flex flex-col items-center px-4 py-20">
        <div className="w-[46rem]">
          <TaskStats />
          {tasks.length === 0 ? <EmptyState /> : <TaskList />}
        </div>
      </div>
    </div>
  );
}
