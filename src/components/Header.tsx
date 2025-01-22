import Image from "next/image";
import Button from "./Button";
import { HiOutlinePlusCircle } from "react-icons/hi";

interface HeaderProps {
  showButton?: boolean;
  onButtonClick?: () => void;
}

export default function Header({ showButton = true, onButtonClick }: HeaderProps) {
  return (
    <div className="w-full bg-[#0D0D0D] flex flex-col items-center relative">
      <div className="flex flex-row items-center gap-6 py-12">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={14}
          height={14}
          className="pt-2"
        />
        <h1 className="text-4xl font-bold">
          <span className="text-[#4EA8DE]">Todo</span>{" "}
          <span className="text-[#5E60CE]">App</span>
        </h1>
      </div>

      {showButton && (
        <div className="flex justify-center w-full translate-y-1/2">
          <Button onClick={onButtonClick}>
            Create Task <HiOutlinePlusCircle />
          </Button>
        </div>
      )}
    </div>
  );
}
