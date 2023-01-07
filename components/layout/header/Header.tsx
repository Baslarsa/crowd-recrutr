import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Button from "../../Button";
import SiteLogo from "../SiteLogo";
import HeaderContainer from "./HeaderContainer";
import { motion, spring } from "framer-motion";

const Header = () => {
  const router = useRouter();
  return (
    <motion.header
      layout
      className="py-3 w-full mx-auto"
      transition={spring}
      key={router.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeaderContainer>
        <SiteLogo />
        <Button onClick={() => router.push("/new-candidate")}>
          <span className="flex items-center">
            Add Candidate
            <PlusIcon className="h-4 w-4 m-1" />
          </span>
        </Button>
      </HeaderContainer>
    </motion.header>
  );
};

export default Header;
