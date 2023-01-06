import { candidates } from "@prisma/client";
import dayjs from "dayjs";
import Image from "next/image";
import ContactBanner from "./ContactBanner";

const CandidateCard = ({
  candidate,
  onClick,
}: {
  candidate: candidates;
  onClick: (value: candidates) => void;
}) => {
  return (
    <li
      key={candidate.email}
      className="cursor-pointer col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center shadow"
    >
      <div
        className="flex flex-1 flex-col p-8"
        onClick={() => onClick(candidate)}
      >
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
  );
};

export default CandidateCard;
