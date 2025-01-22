"use client";

import { COLORS } from "@/app/types/colors";

interface ColorPickerProps {
  selectedColor: string;
  onSelect: (color: string) => void;
}

export default function ColorPicker({ selectedColor, onSelect }: ColorPickerProps) {
  return (
    <div className="flex gap-4">
      {COLORS.map((color) => (
        <button
          key={color}
          type="button"
          onClick={() => onSelect(color)}
          className={`w-12 h-12 rounded-full ${
            color === selectedColor ? "ring-4 ring-white" : ""
          }`}
          style={{ backgroundColor: color }}
        ></button>
      ))}
    </div>
  );
}
