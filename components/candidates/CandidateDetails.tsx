import { candidates } from "@prisma/client";

const CandidateDetails = ({ candidate }: { candidate: candidates }) => {
  return (
    <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-6">
      <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
        <div>
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
            Profession
          </dt>
          <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">
            <p>{candidate?.position}</p>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
            Bio
          </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
            <p>
              Enim feugiat ut ipsum, neque ut. Tristique mi id elementum
              praesent. Gravida in tempus feugiat netus enim aliquet a, quam
              scelerisque. Dictumst in convallis nec in bibendum aenean arcu.
            </p>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
            Email
          </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
            {candidate.email}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
            Phone
          </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
            {candidate.phone}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default CandidateDetails;
