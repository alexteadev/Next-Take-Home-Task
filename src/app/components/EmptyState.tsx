import { HiOutlineClipboard } from "react-icons/hi";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <hr className="w-full border-[#333333] mb-8" />
      <HiOutlineClipboard className="w-12 h-12 text-gray-500 mb-4" />
      <p className="text-gray-400 text-lg font-semibold">
        You don&apos;t have any tasks registered yet.
      </p>
      <p className="text-gray-500">Create tasks and organize your to-do items.</p>
    </div>
  );
}
