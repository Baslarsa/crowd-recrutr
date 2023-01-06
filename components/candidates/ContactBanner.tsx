import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { candidates } from "@prisma/client";

const ContactBanner = ({ candidate }: { candidate: candidates }) => {
  return (
    <div>
      <div className="-mt-px flex divide-x divide-gray-200">
        <div className="flex w-0 flex-1 hover:bg-black hover:text-white overflow-hidden transition-colors duration-200">
          <a
            href={`mailto:${candidate.email}`}
            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center border border-transparent py-4 text-sm font-medium"
          >
            <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
            <span className="ml-3">Email</span>
          </a>
        </div>
        <div className="-ml-px flex w-0 flex-1 hover:bg-black hover:text-white overflow-hidden transition-colors duration-200">
          <a
            href={`tel:${candidate.phone}`}
            className="relative inline-flex w-0 flex-1 items-center justify-center border border-transparent py-4 text-sm font-medium"
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            <span className="ml-3">Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
