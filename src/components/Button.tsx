interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-[46rem] bg-[#1E6F9F] text-white text-lg font-medium py-3 rounded-lg hover:bg-blue-500 transition flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
}
