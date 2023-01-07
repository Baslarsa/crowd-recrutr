import { candidates } from "@prisma/client";
import dayjs from "dayjs";

const CardInfo = ({ candidate }: { candidate: candidates }) => {
  return (
    <div className="py-4">
      <h3 className="text-sm font-medium text-gray-900">
        {`${candidate.first_name} ${candidate.last_name}`}
      </h3>
      <dl className="flex flex-grow flex-col justify-between">
        <dd className="text-sm text-gray-500">
          {dayjs(candidate.created_at).format("YYYY-MM-DD")}
        </dd>
        <dd>
          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
            {candidate.position}
          </span>
        </dd>
      </dl>
    </div>
  );
};

export default CardInfo;
