"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

const COLORS = ["red", "orange", "yellow", "green", "blue", "purple", "brown"];

interface EditFormProps {
  taskId: string;
}

export default function EditForm({ taskId }: EditFormProps) {
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const router = useRouter();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/tasks/${taskId}`);
        const data = await response.json();
        setTitle(data.title);
        setSelectedColor(data.color);
      } catch (error) {
        console.error("Failed to fetch task:", error);
      }
    };

    fetchTask();
  }, [taskId]);

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    try {
      await fetch(`http://localhost:3001/api/tasks/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, color: selectedColor }),
      });

      router.push("/");
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

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

      <div>
        <span className="block text-gray-400 text-lg font-semibold mb-2">Color</span>
        <div className="flex gap-4">
          {COLORS.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setSelectedColor(color)}
              className={`w-12 h-12 rounded-full ${
                color === selectedColor ? "ring-4 ring-white" : ""
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>

      <Button onClick={handleSubmit} className="mt-8">
        Save
      </Button>
    </form>
  );
}
