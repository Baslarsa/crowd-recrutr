import { candidates } from "@prisma/client";
import { motion } from "framer-motion";
import { useContext } from "react";
import ImageContainer from "../../ImageContainer";
import { CandidateContext } from "../CandidateList";
import ContactBanner from "../ContactBanner";
import CardInfo from "./CardInfo";

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CandidateCard = ({ candidate }: { candidate: candidates }) => {
  const { setOpenProfile, setSelectedCandidate } = useContext(CandidateContext);

  const handleClick = () => {
    setSelectedCandidate(candidate);
    setOpenProfile(true);
  };

  return (
    <motion.li
      variants={listItem}
      key={candidate.email}
      className="rounded-sm overflow-hidden cursor-pointer col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center shadow transform hover:-translate-y-1 transition-all duration-200"
    >
      <div className="flex flex-1 flex-col" onClick={handleClick}>
        {candidate.image_url && (
          <ImageContainer
            className="object-cover"
            src={candidate.image_url}
            alt={`${candidate.first_name} Profile Pic`}
          />
        )}
        <CardInfo candidate={candidate} />
      </div>
      <ContactBanner candidate={candidate} />
    </motion.li>
  );
};

export default CandidateCard;
