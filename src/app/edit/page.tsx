"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import EditForm from "./EditForm";

export default function EditPage() {
  const params = useParams();
  const taskId = typeof params.id === "string" ? params.id : "";

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1A1A1A]">
      <Header showButton={false} />
      <div className="w-full max-w-3xl px-4 py-8">
        <EditForm taskId={taskId} />
      </div>
    </div>
  );
}
