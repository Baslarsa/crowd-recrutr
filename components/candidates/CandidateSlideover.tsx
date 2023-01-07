import { useContext } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import CandidateDetails from "./CandidateDetails";
import ContactBanner from "./ContactBanner";
import Button from "../Button";
import { CandidateContext } from "./CandidateList";
import { advanceCandidate, deleteCandidate } from "../../lib/candidates";
import { useRouter } from "next/router";

const CandidateSlideover = () => {
  const router = useRouter();
  const { selectedCandidate, setOpenProfile, openProfile } =
    useContext(CandidateContext);

  const closeDialog = () => {
    setOpenProfile(false);
  };

  const handleProceedClick = async () => {
    if (selectedCandidate) {
      await advanceCandidate(selectedCandidate.email);
    }
    router.reload();

    closeDialog();
  };

  const handleDeleteClick = async () => {
    if (selectedCandidate) {
      await deleteCandidate(selectedCandidate.email);
    }
    router.reload();

    closeDialog();
  };
  return (
    <Dialog
      as="div"
      className={`relative z-10 ${!openProfile && "hidden"}`}
      onClose={closeDialog}
      open={openProfile}
    >
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            {selectedCandidate && (
              <Dialog.Panel className={`pointer-events-auto w-screen max-w-xl`}>
                <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                  <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-xl font-bold text-gray-900">
                          {`${selectedCandidate?.first_name} ${selectedCandidate?.last_name}`}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                            onClick={closeDialog}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="w-64 h-64 mx-auto relative p-6">
                        {selectedCandidate?.image_url && (
                          <Image
                            className="rounded-md"
                            alt={`${selectedCandidate.first_name} Profile Pic`}
                            src={selectedCandidate.image_url}
                            fill={true}
                          />
                        )}
                      </div>

                      <CandidateDetails candidate={selectedCandidate} />
                      <ContactBanner candidate={selectedCandidate} />
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 justify-between px-6 py-4">
                    <div className="text-sm flex items-center">
                      <Button onClick={closeDialog} secondary={true}>
                        Close
                      </Button>
                      <p
                        className="mx-4 cursor-pointer text-gray-700 hover:text-black"
                        onClick={handleDeleteClick}
                      >
                        Delete candidate
                      </p>
                    </div>
                    {selectedCandidate.current_status !== "closed" && (
                      <Button onClick={handleProceedClick} className="mr-4">
                        Move to next step
                      </Button>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CandidateSlideover;
