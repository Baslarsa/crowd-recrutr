import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { candidates } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import CandidateSlideover from "./CandidateSlideover";
import dayjs from "dayjs";
import ContactBanner from "./ContactBanner";

const CandidateList = ({ candidates }: { candidates: candidates[] }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<candidates>();

  const handleCardClick = (candidate: candidates) => {
    setSelectedCandidate(candidate);
    setOpenProfile(true);
  };

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4"
      >
        {candidates.map((candidate) => {
          return (
            <>
              <li
                onClick={() => handleCardClick(candidate)}
                key={candidate.email}
                className="cursor-pointer col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
              >
                <div className="flex flex-1 flex-col p-8">
                  {candidate.image_url && (
                    <div className=" h-32 w-32 relative mx-auto">
                      <Image
                        className="rounded-full"
                        src={candidate.image_url}
                        fill={true}
                        alt={`${candidate.first_name} Profile Pic`}
                      />
                    </div>
                  )}
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    {`${candidate.first_name} ${candidate.last_name}`}
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dd className="text-sm text-gray-500">
                      {dayjs(candidate.created_at).format("YYYY-MM-DD")}
                    </dd>
                    <dd className="mt-3">
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        {candidate.position}
                      </span>
                    </dd>
                  </dl>
                </div>
                <ContactBanner candidate={candidate} />
              </li>
              <CandidateSlideover
                open={openProfile}
                setOpen={setOpenProfile}
                candidate={selectedCandidate}
              />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default CandidateList;
