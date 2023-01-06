import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { candidates } from "@prisma/client";
import Image from "next/image";
import Button from "../Button";
import CandidateDetails from "./CandidateDetails";
import ContactBanner from "./ContactBanner";

const CandidateDialogueContent = ({
  candidate,
  onClose,
}: {
  candidate: candidates;
  onClose: () => void;
}) => {
  return (
    <>
      {" "}
      <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
        <div className="px-4 sm:px-6">
          <div className="flex items-start justify-between">
            <Dialog.Title className="text-lg font-medium text-gray-900">
              {`${candidate?.first_name} ${candidate?.last_name}`}
            </Dialog.Title>
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                onClick={onClose}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative mt-6 flex-1 px-4 sm:px-6">
          <div className="w-64 h-64 mx-auto relative p-6">
            {candidate?.image_url && (
              <Image
                className="rounded-full"
                alt={`${candidate.first_name} Profile Pic`}
                src={candidate.image_url}
                fill={true}
              />
            )}
          </div>
          {candidate && (
            <>
              <CandidateDetails candidate={candidate} />
              <ContactBanner candidate={candidate} />
            </>
          )}
        </div>
      </div>
      <div className="flex flex-shrink-0 justify-end px-6 py-4">
        <Button onClick={onClose}>Close</Button>
      </div>
    </>
  );
};

export default CandidateDialogueContent;
