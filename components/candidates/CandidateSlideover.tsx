import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { candidates } from "@prisma/client";
import Image from "next/image";
import CandidateDetails from "./CandidateDetails";
import ContactBanner from "./ContactBanner";
import Button from "../Button";

const CandidateSlideover = ({
  candidate,
  open,
  setOpen,
}: {
  candidate?: candidates;
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const closeDialog = () => {
    setOpen(false);
  };
  return (
    <Dialog as="div" className="relative z-10" onClose={setOpen} open={open}>
      <div className="fixed inset-0" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
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
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {/* Replace with your content */}
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
                    {/* /End replace */}
                  </div>
                </div>
                <div className="flex flex-shrink-0 justify-end px-6 py-4">
                  <Button onClick={closeDialog}>Close</Button>
                  {/* <button
                        type="submit"
                        className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      >
                        Save
                      </button> */}
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CandidateSlideover;
