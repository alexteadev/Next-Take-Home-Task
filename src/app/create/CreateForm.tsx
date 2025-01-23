"use client";

import { useState } from "react";
import Button from "@/components/Button";
import ColorPicker from "@/components/ColorPicker";
import { HiOutlinePlusCircle } from "react-icons/hi";
import API_URL from "@/utils/api";

export default function CreateForm() {
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("red");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setError(null);

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, color: selectedColor, completed: false }),
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to create task:", error);
      setError("Failed to create task");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <label className="block text-[#4EA8DE] text-lg font-semibold">
        Title
        <input
          type="text"
          placeholder="Ex. Brush your teeth"
          className="mt-2 w-full bg-[#2A2A2A] text-white py-2 px-4 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">Task created successfully!</p>}

      <div>
        <span className="block text-[#4EA8DE] text-lg font-semibold mb-2">Color</span>
        <ColorPicker selectedColor={selectedColor} onSelect={setSelectedColor} />
      </div>

      <Button onClick={handleSubmit} className="mt-8">
        Add Task <HiOutlinePlusCircle />
      </Button>
    </div>
  );
}
