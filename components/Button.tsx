import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

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
      className="hover:bg-sunset border items-center justify-center border-sunset text-sunset py-2 px-4 rounded-full hover:text-white transition-all cursor-pointer stroke-2 stroke-sunset hover:stroke-white"
    >
      <p className="transform -translate-y-[1px]">
        {onClick && <button>{children}</button>}
        {href && <Link href={href}>{children}</Link>}
      </p>
    </motion.div>
  );
};

export default Button;
