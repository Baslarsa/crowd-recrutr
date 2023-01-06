import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { candidates } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import CandidateSlideover from "./CandidateSlideover";
import dayjs from "dayjs";
import ContactBanner from "./ContactBanner";
import CandidateCard from "./CandidateCard";

const CandidateList = ({ candidates }: { candidates: candidates[] }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<candidates>();

  const handleCardClick = (candidate: candidates) => {
    setSelectedCandidate(candidate);
    setOpenProfile(true);
  };

  return (
    <div className="mx-auto w-full">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4"
      >
        {candidates.map((candidate) => {
          return (
            <>
              <CandidateCard candidate={candidate} onClick={handleCardClick} />
              <CandidateSlideover
                open={openProfile}
                setOpen={setOpenProfile}
                candidate={selectedCandidate}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default CandidateList;
