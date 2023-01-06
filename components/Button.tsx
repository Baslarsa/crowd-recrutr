import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { on } from "process";

const Button = ({
  children,
  onClick,
  href,
  secondary,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  secondary?: boolean;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      className="border items-center justify-center text-white py-2 px-4 transition-all duration-100 cursor-pointer stroke-2 stroke-white bg-black hover:bg-gray-700"
    >
      <p>
        {onClick && <button onClick={onClick}>{children}</button>}
        {href && <Link href={href}>{children}</Link>}
      </p>
    </motion.div>
  );
};

export default Button;
