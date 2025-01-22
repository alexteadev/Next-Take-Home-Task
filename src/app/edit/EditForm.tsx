"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Button from "@/components/Button";
import ColorPicker from "@/components/ColorPicker";

export default function EditForm() {
  const task = useSelector((state: RootState) => state.task.selectedTask);
  const [title, setTitle] = useState(task?.title || "");
  const [selectedColor, setSelectedColor] = useState(task?.color || "red");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      await fetch(`http://localhost:3001/api/tasks/${task?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, color: selectedColor }),
      });

      router.push("/");
    } catch (error) {
      console.error("Failed to update task:", error);
      setError("Failed to update task");
    }
  };

  if (!task) {
    return <p className="text-white text-lg">No task selected.</p>;
  }

  return (
    <form className="flex flex-col gap-6">
      <label className="block text-gray-400 text-lg font-semibold">
        Title
        <input
          type="text"
          className="mt-2 w-full bg-[#2A2A2A] text-white py-2 px-4 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div>
        <span className="block text-gray-400 text-lg font-semibold mb-2">Color</span>
        <ColorPicker selectedColor={selectedColor} onSelect={setSelectedColor} />
      </div>

      <Button onClick={handleSubmit} className="mt-8">
        Save
      </Button>
    </form>
  );
}
