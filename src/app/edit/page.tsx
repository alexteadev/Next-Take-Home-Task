"use client";

import { useSelector } from "react-redux";
import Header from "@/components/Header";
import EditForm from "./EditForm";
import { RootState } from "@/store";
import BackButton from "@/components/BackButton";

export default function EditPage() {
  const selectedTask = useSelector((state: RootState) => state.task.selectedTask);

  if (!selectedTask) {
    return (
      <div className="flex flex-col items-center min-h-screen bg-[#1A1A1A]">
        <Header showButton={false} />
        <div className="w-full max-w-3xl px-4 py-8 flex flex-col items-center">
          <BackButton />
          <p className="text-white text-lg font-semibold text-center mt-8">
            No task selected. Please go back and choose a task to edit.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1A1A1A]">
      <Header showButton={false} />
      <div className="w-full max-w-3xl px-4 py-8">
        <BackButton />
        <EditForm />
      </div>
    </div>
  );
}
