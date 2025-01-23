"use client";

import { useRouter } from "next/navigation";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/")}
      className="text-white hover:text-gray-200 transition"
    >
      <HiOutlineArrowLeft className="w-6 h-6" />
    </button>
  );
}

