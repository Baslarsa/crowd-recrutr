import { motion } from "framer-motion";
import { candidates } from "@prisma/client";
import { createContext, useState } from "react";
import CandidateSlideover from "./CandidateSlideover";
import CandidateCard from "./card/CandidateCard";
import { listContainerAnimation } from "../../lib/constants";

export const CandidateContext = createContext<{
  selectedCandidate: candidates | undefined;
  openProfile: boolean;
  setOpenProfile: (value: boolean) => void;
  setSelectedCandidate: (value: candidates) => void;
}>({
  selectedCandidate: undefined,
  openProfile: false,
  setOpenProfile: () => {},
  setSelectedCandidate: () => {},
});

const CandidateList = ({ candidates }: { candidates: candidates[] }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<candidates>();

  if (!candidates) return <>Could not fetch candidates</>;
  return (
    <CandidateContext.Provider
      value={{
        openProfile,
        setOpenProfile,
        setSelectedCandidate,
        selectedCandidate,
      }}
    >
      <div className="mx-auto w-full">
        <motion.ul
          variants={listContainerAnimation}
          initial="hidden"
          animate="show"
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4"
        >
          {candidates.map((candidate) => {
            return <CandidateCard candidate={candidate} />;
          })}
          <CandidateSlideover />
        </motion.ul>
      </div>
    </CandidateContext.Provider>
  );
};

export default CandidateList;
