import Link from "next/link";
import { motion } from "framer-motion";

const SiteLogo = () => {
  return (
    <Link href="/">
      <motion.div
        className="text-3xl leading-6 font-grato hover:animate-pulse"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
      >
        <p>crowd</p>
        <p>
          recrut
          <motion.span className="animate-color-trip text-sunset">
            r
          </motion.span>
          .
        </p>
      </motion.div>
    </Link>
  );
};

export default SiteLogo;
