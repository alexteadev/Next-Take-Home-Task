"use client";

import { useSelector } from "react-redux";
import Header from "@/components/Header";
import EditForm from "./EditForm";
import { RootState } from "@/store";

export default function EditPage() {
  const task = useSelector((state: RootState) => state.task.selectedTask);

  if (!task) {
    return <p>No task selected. Go back to the home page.</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1A1A1A]">
      <Header showButton={false} />
      <div className="w-full max-w-3xl px-4 py-8">
        <EditForm />
      </div>
    </div>
  );
}
