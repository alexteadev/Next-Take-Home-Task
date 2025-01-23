"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import Button from "@/components/Button";
import ColorPicker from "@/components/ColorPicker";
import { updateTask } from "@/store/taskSlice";
import { HiOutlineCheck } from "react-icons/hi";
import API_URL from "@/utils/api";

export default function EditForm() {
  const task = useSelector((state: RootState) => state.task.selectedTask);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(task?.title || "");
  const [selectedColor, setSelectedColor] = useState(task?.color || "red");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/tasks/${task?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, color: selectedColor }),
      });

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      const updatedTask = await response.json();
      dispatch(updateTask({ id: updatedTask.id, updatedTask }));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Failed to update task:", error);
      setError("Failed to update task");
    }
  };

  if (!task) {
    return <p className="text-white text-lg">No task selected.</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      <label className="block text-[#4EA8DE] text-lg font-semibold">
        Title
        <input
          type="text"
          className="mt-2 w-full bg-[#2A2A2A] text-white py-2 px-4 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">Task updated successfully!</p>}

      <div>
        <span className="block text-[#4EA8DE] text-lg font-semibold mb-2">Color</span>
        <ColorPicker selectedColor={selectedColor} onSelect={setSelectedColor} />
      </div>

      <Button onClick={handleSubmit} className="mt-8">
        Save <HiOutlineCheck />
      </Button>
    </div>
  );
}
