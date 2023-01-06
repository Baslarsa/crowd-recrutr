import Link from "next/link";
import { motion } from "framer-motion";

const SiteLogo = () => {
  return (
    <Link href="/">
      <motion.div
        className="text-3xl leading-7 font-grato"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
      >
        <p>crowd</p>
        <p>
          recrut<motion.span className="text-sunset">r</motion.span>.
        </p>
      </motion.div>
    </Link>
  );
};

export default SiteLogo;
