import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { containerAnimation } from "../../lib/constants";
import { CandidateContext } from "./CandidateList";
import DialogPanel from "./DialogPanel";

const CandidateSlideover = () => {
  const { setOpenProfile, openProfile } = useContext(CandidateContext);

  const closeDialog = () => {
    setOpenProfile(false);
  };

  return (
    <Dialog
      as="div"
      className={`relative z-10 ${!openProfile && "hidden"}`}
      onClose={closeDialog}
      open={openProfile}
    >
      <motion.div
        className="fixed inset-0 overflow-hidden"
        variants={containerAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel />
          </div>
        </div>
      </motion.div>
    </Dialog>
  );
};

export default CandidateSlideover;
