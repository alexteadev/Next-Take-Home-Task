"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import ColorPicker from "@/components/ColorPicker";

export default function CreateForm() {
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("red");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    try {
      await fetch("http://localhost:3001/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, color: selectedColor, completed: false }),
      });

      router.push("/");
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  return (
    <form className="flex flex-col gap-6">
      <label className="block text-gray-400 text-lg font-semibold">
        Title
        <input
          type="text"
          placeholder="Ex. Brush your teeth"
          className="mt-2 w-full bg-[#2A2A2A] text-white py-2 px-4 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <div>
        <span className="block text-gray-400 text-lg font-semibold mb-2">Color</span>
        <ColorPicker selectedColor={selectedColor} onSelect={setSelectedColor} />
      </div>

      <Button onClick={handleSubmit} className="mt-8">
        Add Task
      </Button>
    </form>
  );
}
