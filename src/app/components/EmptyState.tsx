import { HiOutlineClipboardList } from "react-icons/hi";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <hr className="w-full border-[#333333] mb-8" />
      <HiOutlineClipboardList className="w-12 h-12 text-gray-500" />
      <p className="text-gray-400 text-lg font-semibold mt-4">
        You don&apos;t have any tasks registered yet.
      </p>
      <p className="text-gray-500 mt-2">Create tasks and organize your to-do items.</p>
    </div>
  );
}
