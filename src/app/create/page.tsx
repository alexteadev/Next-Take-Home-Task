"use client";

import Header from "@/components/Header";
import CreateForm from "./CreateForm";
import BackButton from "@/components/BackButton";

export default function CreatePage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1A1A1A]">
      <Header showButton={false} />
      <div className="w-full max-w-3xl px-4 py-8">
        <BackButton />
        <CreateForm />
      </div>
    </div>
  );
}
