import { motion } from "framer-motion";
import { ReactNode } from "react";

const Button = ({
  children,
  className,
  disabled,
  onClick,
  secondary,
  type,
}: {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (value: any) => void;
  secondary?: boolean;
  type?: "submit" | "reset" | "button";
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      className={`border items-center justify-center text-white py-2 px-4 transition-all duration-100 cursor-pointer stroke-2 stroke-white bg-black hover:bg-gray-700 ${className} ${
        secondary &&
        "bg-white text-gray-700 hover:bg-white hover:text-black hover:border-gray-500"
      }`}
    >
      <button
        type={type || "button"}
        onClick={onClick}
        className="h-full w-full"
        disabled={disabled}
      >
        {children}
      </button>
    </motion.div>
  );
};

export default Button;
