"use client";

import { useRouter } from "next/navigation";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/")}
      className="text-blue-500 hover:text-blue-400 transition"
    >
      <HiOutlineArrowLeft className="w-6 h-6" />
    </button>
  );
}

